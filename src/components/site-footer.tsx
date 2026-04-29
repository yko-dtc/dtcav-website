import { footerContent, navigation, siteConfig } from "@/content/site";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1.5fr_1fr] lg:px-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">{siteConfig.motto}</p>
          <p className="max-w-xl text-sm leading-7 text-slate-300">{footerContent.statement}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300 lg:justify-end">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs uppercase tracking-[0.2em] text-slate-500 sm:px-6 lg:px-10">
        {footerContent.copyright}
      </div>
    </footer>
  );
}
