import Link from "next/link";

export default function NotFound() {
  return (
    <main id="content" className="min-h-[50vh] flex items-center justify-center text-center py-16">
      <div className="px-6">
        <h1 className="text-5xl font-bold heading text-primary">Page not found</h1>
        <p className="mt-3 text-text/80">Sorry, we couldn’t find that page.</p>
        <Link href="/" className="mt-6 inline-flex items-center rounded-md px-5 py-2.5 bg-primary text-offWhite font-semibold hover:bg-primary/90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Go Home</Link>
      </div>
    </main>
  );
}
