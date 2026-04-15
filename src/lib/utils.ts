import { clsx } from "clsx";

export function cn(...inputs: Array<string | false | null | undefined>) {
  return clsx(inputs);
}

export function absoluteUrl(path: string) {
  return new URL(path, process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dtcav.com").toString();
}
