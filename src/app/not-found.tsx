import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-5 text-5xl font-semibold text-white sm:text-6xl">This route is not part of the current DTC AV site map.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
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
