import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { getSite, groupMeta } from "@/lib/content";

export const metadata: Metadata = { title: "People" };

export default function PeoplePage() {
  const { people } = getSite();
  return (
    <>
      <PageHero
        kicker="People"
        title="The people who build the recognizers."
        lede="Faculty, engineers, students, and alumni of the Smart Identity Recognition group. Roles follow the group's own pages, with faculty biographies updated from public CASIA and personal academic profiles."
      />
      <div className="mx-auto max-w-6xl space-y-14 px-4 pb-20">
        {groupMeta.map((group) => {
          const members = people.filter((person) => person.group === group.id);
          if (!members.length) return null;
          return (
            <section key={group.id}>
              <h2 className="text-sm uppercase tracking-[0.16em] text-zinc-500">{group.label}</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                {members.map((person) => (
                  <Link key={person.slug} href={`/people/${person.slug}/`} className="rounded-3xl border border-zinc-200 bg-white p-4 transition hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-950">
                    {person.image ? (
                      <img src={person.image} alt="" className="aspect-square w-full rounded-2xl object-cover" />
                    ) : (
                      <div className="grid aspect-square w-full place-items-center rounded-2xl bg-zinc-100 text-2xl dark:bg-zinc-900">{person.name.slice(0, 1)}</div>
                    )}
                    <p className="mt-3 font-medium">{person.name}</p>
                    <p className="text-sm text-zinc-500">{person.role}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
