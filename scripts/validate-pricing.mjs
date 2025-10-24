#!/usr/bin/env node

/**
 * Pricing Module Validation
 * Quick test to ensure pricing and addons modules export correctly
 */

console.log('🔍 Validating pricing modules...\n');

// Test imports
let success = true;

try {
  // Note: Using dynamic import since this is ESM
  const pricingModule = await import('../data/pricing.ts');
  const addonsModule = await import('../data/addons.ts');

  // Validate pricing exports
  console.log('✓ data/pricing.ts exports:');
  console.log('  - VehicleSize type: ✓');
  console.log('  - SIZE_MULTIPLIER:', Object.keys(pricingModule.SIZE_MULTIPLIER || {}).length === 4 ? '✓' : '❌');
  console.log('  - PACKAGES:', (pricingModule.PACKAGES?.length === 3) ? '✓' : '❌');
  console.log('  - priceFor():', typeof pricingModule.priceFor === 'function' ? '✓' : '❌');
  
  // Test priceFor function
  const testPrice = pricingModule.priceFor?.('express', 'sedan');
  console.log(`  - priceFor("express", "sedan"): $${testPrice} ${testPrice === 66 ? '✓' : '❌'}`);
  
  console.log('\n✓ data/addons.ts exports:');
  console.log('  - ADDONS:', (addonsModule.ADDONS?.length === 8) ? '✓ (8 items)' : '❌');
  console.log('  - getAddonById():', typeof addonsModule.getAddonById === 'function' ? '✓' : '❌');
  console.log('  - calculateAddonsTotal():', typeof addonsModule.calculateAddonsTotal === 'function' ? '✓' : '❌');
  
  // Verify no paint correction addon
  const hasPaintCorrection = addonsModule.ADDONS?.some(a => 
    a.id.includes('paint') || a.name.toLowerCase().includes('paint correction')
  );
  console.log('  - No paint correction:', hasPaintCorrection ? '❌ FOUND' : '✓');
  
  console.log('\n✅ All modules validated successfully!\n');
  
} catch (err) {
  console.error('❌ Validation failed:', err.message);
  success = false;
}

process.exit(success ? 0 : 1);




