import Link from "next/link";
import RequestForm from "@/components/ui/RequestForm";

export default function BookingPage(props: { searchParams?: { pkg?: string } } | { searchParams: Promise<{ pkg?: string }> }) {
  // Handle Next 15 possible promise-wrapped searchParams
  // @ts-expect-error next can pass a promise here during SSG extraction
  const sp = props.searchParams?.then ? undefined : (props as any).searchParams;
  const pkg = (sp && typeof sp === 'object') ? sp.pkg : undefined;

  return (
    <main className="pt-[var(--header-h)]">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-8">
        <h1 className="text-4xl font-bold text-text">Booking</h1>
        <p className="mt-2 text-muted-foreground">Tell us about your vehicle and preferred contact. We’ll email you a confirmation.</p>
        {pkg === "quote" && (
          <div className="mt-4 inline-flex items-center rounded-full border border-subtle bg-white px-3 py-1 text-sm text-text">Quote requested</div>
        )}
      </section>
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="card p-6">
          <RequestForm />
        </div>
      </section>
    </main>
  );
}
