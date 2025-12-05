import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "~/components/ui/card";

type EventCardProps = {
  id: string;
  title: string;
  city: string;
  date: string;
  banner?: string;
  href?: string;
};

export function EventCard({
  id,
  title,
  city,
  date,
  banner,
  href,
}: EventCardProps) {
  return (
    <Link href={href ?? `/event/${id}`}>
      <Card className="overflow-hidden p-0 hover:shadow-md">
        <div className="bg-accent relative h-40 w-full">
          {banner ? (
            <Image src={banner} alt={title} fill className="object-cover" />
          ) : (
            <div className="bg-accent h-full w-full" />
          )}
        </div>
        <CardContent className="p-4">
          <CardTitle className="text-sm">{title}</CardTitle>
          <p className="text-muted-foreground mt-1 text-xs">
            {city} • {date}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export function EventCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="bg-accent h-32 w-full" />
      <CardContent className="p-0">
        <div className="p-3">
          <div className="bg-accent h-4 w-2/3 rounded" />
          <div className="bg-accent mt-2 h-3 w-1/2 rounded" />
        </div>
      </CardContent>
    </Card>
  );
}
