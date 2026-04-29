import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[70vh] flex-col items-center justify-center py-16 text-center sm:py-20 lg:py-24">
      <p className="eyebrow">404</p>
      <h1 className="page-title mt-5">This route is not part of the current DTC AV site map.</h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
        The redesigned experience is organized around Home, About, Solutions, and Contact.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 transition hover:bg-cyan-300/25"
      >
        Return home
      </Link>
    </div>
  );
}
