import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { formatDate, getSite } from "@/lib/content";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  const { news } = getSite();
  return (
    <>
      <PageHero kicker="News" title="What the group has just finished." lede="Acceptances, awards, datasets, and the occasional note from the lab." />
      <ol className="mx-auto max-w-3xl px-4 pb-20">
        {news.map((item) => (
          <li key={item.slug} className="border-t border-zinc-200 py-6 dark:border-zinc-800">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">{formatDate(item.date)} · {item.kind}</p>
            <Link href={`/news/${item.slug}/`} className="mt-2 block text-2xl font-medium tracking-tight hover:text-violet-700 dark:hover:text-violet-300">
              {item.title}
            </Link>
            {item.summary && <p className="mt-2 text-zinc-600 dark:text-zinc-400">{item.summary}</p>}
          </li>
        ))}
      </ol>
    </>
  );
}
