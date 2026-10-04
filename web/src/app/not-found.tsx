import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-40 text-center">
      <p className="kicker text-violet-600">404</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight">That page is not on this site.</h1>
      <Link href="/" className="mt-6 inline-block text-sm text-violet-700">Back home</Link>
    </div>
  );
}
