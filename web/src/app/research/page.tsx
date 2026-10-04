import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { getSite } from "@/lib/content";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  const { areas } = getSite();
  return (
    <>
      <PageHero
        kicker="Research"
        title="Six problems, one person in view."
        lede="From the iris camera to the privacy of the template, the group builds the pieces of recognition that still work when cooperation is thin."
      />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-20">
        {areas.map((area, index) => (
          <Link key={area.slug} href={`/research/${area.slug}/`} className="grid overflow-hidden rounded-3xl border border-zinc-200 bg-white md:grid-cols-[18rem_1fr] dark:border-zinc-800 dark:bg-zinc-950">
            <div className="min-h-48 bg-zinc-100 dark:bg-zinc-900">
              {area.image && <img src={area.image} alt="" className="h-full w-full object-cover" />}
            </div>
            <div className="p-6 md:p-8">
              <p className="font-mono text-xs text-zinc-400">0{index + 1}</p>
              <h2 className="mt-2 text-2xl font-medium tracking-tight">{area.title}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-300">{area.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
