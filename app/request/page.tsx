export const dynamic = "force-dynamic"; // avoid static prerender

import RequestClient from "../../components/request/RequestClient";

export default function RequestPage() {
  return (
    <div className="bg-base text-text min-h-screen">
      <RequestClient />
    </div>
  );
}
