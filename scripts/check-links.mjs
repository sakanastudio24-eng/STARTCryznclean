#!/usr/bin/env node

/**
 * Link Checker - Dev Tool
 * 
 * Scans the repository for <Link> and <a> tags and validates:
 * - "Book Now" → /booking
 * - "Contact" → /contact
 * - "Request a Quote" → /contact
 * - No external Setmore links except on /confirmation page
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const RULES = [
  {
    pattern: /(?:Book\s+Now|Book\s+now|Book\s+Appointment)/gi,
    expectedHref: '/booking',
    allowExternal: false,
  },
  {
    pattern: /(?:Request\s+a?\s*Quote|Request\s+Quote)/gi,
    expectedHref: '/contact',
    allowExternal: false,
  },
  {
    pattern: /Contact(?:\s+Us)?/gi,
    expectedHref: '/contact',
    allowExternal: false,
  },
];

const ALLOWED_EXTERNAL_SETMORE = [
  'app/confirmation/page.tsx',
  'lib/config.ts',
  'components/site/SiteConfig.ts',
];

const violations = [];
const stats = {
  filesScanned: 0,
  linksFound: 0,
  violations: 0,
};

function scanDirectory(dir, baseDir) {
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    
    // Skip node_modules, .next, .git, dist
    if (entry === 'node_modules' || entry === '.next' || entry === '.git' || entry === 'dist' || entry === 'magicpath-project') {
      continue;
    }

    if (stat.isDirectory()) {
      scanDirectory(fullPath, baseDir);
    } else if (entry.match(/\.(tsx?|jsx?)$/)) {
      scanFile(fullPath, baseDir);
    }
  }
}

function scanFile(filePath, baseDir) {
  const relativePath = relative(baseDir, filePath).replace(/\\/g, '/');
  const content = readFileSync(filePath, 'utf8');
  stats.filesScanned++;

  // Find all <Link> and <a> tags with href
  const linkRegex = /<(?:Link|a)\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/(?:Link|a)>/gi;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[1];
    const linkText = match[2].replace(/<[^>]+>/g, '').trim(); // Strip inner tags
    stats.linksFound++;

    // Check against rules
    for (const rule of RULES) {
      if (rule.pattern.test(linkText)) {
        rule.pattern.lastIndex = 0; // Reset regex state
        
        if (href !== rule.expectedHref) {
          violations.push({
            file: relativePath,
            linkText,
            actualHref: href,
            expectedHref: rule.expectedHref,
            line: content.substring(0, match.index).split('\n').length,
          });
          stats.violations++;
        }
      }
      rule.pattern.lastIndex = 0; // Reset for next iteration
    }

    // Check for external Setmore links
    if (href.includes('setmore.com') && !ALLOWED_EXTERNAL_SETMORE.some(allowed => relativePath.includes(allowed))) {
      violations.push({
        file: relativePath,
        linkText,
        actualHref: href,
        expectedHref: 'Should use /booking or be in allowed files',
        line: content.substring(0, match.index).split('\n').length,
        type: 'external-setmore',
      });
      stats.violations++;
    }
  }
}

// Run the scan
const baseDir = process.cwd();
const scanDirs = ['app', 'components'];

console.log('🔍 Scanning for link violations...\n');

for (const dir of scanDirs) {
  const fullPath = join(baseDir, dir);
  try {
    scanDirectory(fullPath, baseDir);
  } catch (err) {
    console.warn(`Warning: Could not scan ${dir}:`, err.message);
  }
}

// Print results
console.log(`📊 Scan Complete:`);
console.log(`   Files scanned: ${stats.filesScanned}`);
console.log(`   Links found: ${stats.linksFound}`);
console.log(`   Violations: ${stats.violations}\n`);

if (violations.length === 0) {
  console.log('✅ All links are correct!\n');
  process.exit(0);
} else {
  console.log('❌ Violations Found:\n');
  console.log('┌─────────────────────────────────────────────────────────────────────────────────────┐');
  console.log('│ File                              │ Label           │ Actual → Expected            │');
  console.log('├─────────────────────────────────────────────────────────────────────────────────────┤');
  
  for (const v of violations) {
    const file = v.file.padEnd(33).substring(0, 33);
    const label = v.linkText.padEnd(15).substring(0, 15);
    const href = `${v.actualHref} → ${v.expectedHref}`.padEnd(28).substring(0, 28);
    console.log(`│ ${file} │ ${label} │ ${href} │`);
  }
  
  console.log('└─────────────────────────────────────────────────────────────────────────────────────┘\n');
  
  process.exit(1);
}

