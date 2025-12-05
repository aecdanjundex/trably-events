import Link from "next/link";
import { EventCard, EventCardSkeleton } from "~/components/event-card";

type FeaturedEvent = {
  id: string;
  title: string;
  city: string;
  date: string;
  banner?: string;
  href?: string;
};

export function FeaturedEvents({ events = [] }: { events?: FeaturedEvent[] }) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Eventos em destaque</h2>
        <Link href="/events" className="text-sm underline">
          Ver todos
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {events.length === 0
          ? Array.from({ length: 4 }).map((_, i) => (
              <EventCardSkeleton key={i} />
            ))
          : events.map((ev) => <EventCard key={ev.id} {...ev} />)}
      </div>
    </section>
  );
}
