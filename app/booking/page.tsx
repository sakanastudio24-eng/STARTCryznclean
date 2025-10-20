import BookingClient from "./BookingClient";

export const metadata = {
  title: "Booking · Cruiz n Clean",
  description: "Tell us about your vehicle and preferences, then pick a time.",
};

type SP = Record<string, string | string[] | undefined>;

// Accept either an object or a Promise (covers Next variants)
export default async function BookingPage(
  props: { searchParams?: SP | Promise<SP> }
) {
  const spMaybe = props.searchParams ?? {};
  const isPromise = typeof (spMaybe as any)?.then === "function";
  const sp: SP = isPromise ? await (spMaybe as Promise<SP>) : (spMaybe as SP);

  const pkg = typeof sp.pkg === "string" ? sp.pkg : "";
  const addonsParam = sp.addons;
  const addons =
    typeof addonsParam === "string" ? addonsParam.split(",") :
    Array.isArray(addonsParam) ? addonsParam : [];

  return <BookingClient initialPkg={pkg} initialAddons={addons as string[]} />;
}
