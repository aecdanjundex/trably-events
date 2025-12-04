import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

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
              <Card key={i} className="overflow-hidden">
                <div className="bg-accent h-32 w-full" />
                <CardContent className="p-0">
                  <div className="p-3">
                    <div className="bg-accent h-4 w-2/3 rounded" />
                    <div className="bg-accent mt-2 h-3 w-1/2 rounded" />
                  </div>
                </CardContent>
              </Card>
            ))
          : events.map((ev) => (
              <Link key={ev.id} href={ev.href ?? `/event/${ev.id}`}>
                <Card className="overflow-hidden p-0 hover:shadow-md">
                  <div className="bg-accent relative h-40 w-full">
                    {ev.banner ? (
                      <Image
                        src={ev.banner}
                        alt={ev.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="bg-accent h-full w-full" />
                    )}
                  </div>
                  <CardContent className="p-4">
                    <CardTitle className="text-sm">{ev.title}</CardTitle>
                    <p className="text-muted-foreground mt-1 text-xs">
                      {ev.city} • {ev.date}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
      </div>
    </section>
  );
}
