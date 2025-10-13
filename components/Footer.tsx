export default function Footer() {
  return (
    <footer className="w-full bg-charcoal text-offWhite py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <span className="text-sm">&copy; {new Date().getFullYear()} Cruiz n Clean. All rights reserved.</span>
        <div className="space-x-4">
          <a href="/terms" className="hover:underline">Terms</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
