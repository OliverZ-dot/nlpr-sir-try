import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { getSite } from "@/lib/content";

export const metadata: Metadata = { title: "Open Lab" };

export default function OpenLabPage() {
  const { datasets } = getSite();
  return (
    <>
      <PageHero
        kicker="Open lab"
        title="Datasets the community can request."
        lede="Iris, face, light-field, and polarization collections released for research. Most downloads are approved through the CASIA Ideal Test portal."
      />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-12 md:grid-cols-2">
        {datasets.map((item) => (
          <Link key={item.slug} href={`/open-lab/${item.slug}/`} className="overflow-hidden rounded-3xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            {item.image && <img src={item.image} alt="" className="aspect-[16/8] w-full object-cover" />}
            <div className="p-5">
              <h2 className="text-xl font-medium tracking-tight">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.summary}</p>
            </div>
          </Link>
        ))}
      </div>
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="text-xl font-medium">Code</h2>
          <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Shared implementations live under the CRIPAC-SIR organization. Individual papers also link to author repositories when a release exists.
          </p>
          <a className="mt-4 inline-block text-sm text-violet-700 dark:text-violet-300" href="https://github.com/CRIPAC-SIR">github.com/CRIPAC-SIR</a>
        </div>
      </section>
    </>
  );
}
