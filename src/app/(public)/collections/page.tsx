import {
  Music2,
  Drama,
  CalendarClock,
  Mic,
  Percent,
  Footprints,
  Baby,
  Dumbbell,
  Presentation,
  Crown,
  BookOpen,
  UtensilsCrossed,
  Radio,
  HeartHandshake,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";

type Collection = {
  title: string;
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
};

const collections: Collection[] = [
  { title: "Festas e Shows", slug: "festas-e-shows", icon: Music2 },
  {
    title: "Teatros e Espetáculos",
    slug: "teatros-e-espetaculos",
    icon: Drama,
  },
  { title: "Réveillon 2026", slug: "reveillon-2026", icon: CalendarClock },
  { title: "Stand Up Comedy", slug: "stand-up-comedy", icon: Mic },
  {
    title: "Descontos exclusivos",
    slug: "descontos-exclusivos",
    icon: Percent,
  },
  { title: "Passeios e Tours", slug: "passeios-e-tours", icon: Footprints },
  { title: "Infantil", slug: "infantil", icon: Baby },
  { title: "Esportes", slug: "esportes", icon: Dumbbell },
  {
    title: "Congressos e Palestras",
    slug: "congressos-e-palestras",
    icon: Presentation,
  },
  { title: "Carnaval", slug: "carnaval", icon: Crown },
  { title: "Cursos e Workshops", slug: "cursos-e-workshops", icon: BookOpen },
  { title: "Gastronomia", slug: "gastronomia", icon: UtensilsCrossed },
  { title: "Pride", slug: "pride", icon: Radio },
  {
    title: "Religião e Espiritualidade",
    slug: "religiao-e-espiritualidade",
    icon: HeartHandshake,
  },
  { title: "Eventos Online", slug: "eventos-online", icon: PlayCircle },
  { title: "Sympla Play", slug: "sympla-play", icon: PlayCircle },
  {
    title: "Eventos Corporativos",
    slug: "eventos-corporativos",
    icon: Presentation,
  },
];

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold">Coleções</h1>
      <GridTiles />
    </div>
  );
}

import { Card, CardContent } from "~/components/ui/card";

function GridTiles() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
      {collections.map(({ title, slug, icon: Icon }) => {
        const href = `/collections/${slug}`;
        return (
          <Link key={slug} href={href} className="block">
            <Card className="transition-shadow hover:shadow-lg">
              <CardContent className="flex h-28 w-full flex-col items-center justify-center gap-2 p-4 text-center">
                <Icon className="text-muted-foreground h-6 w-6" />
                <span className="text-foreground/80 text-sm font-medium">
                  {title}
                </span>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
