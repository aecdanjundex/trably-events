"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useState, useMemo } from "react";
import { ArrowLeft, ArrowUpRightIcon, Calendar } from "lucide-react";
import { EventCard } from "~/components/event-card";
import { Separator } from "~/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Button } from "~/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/components/ui/empty";

const collectionsData: Record<string, { title: string; description: string }> =
  {
    "festas-e-shows": {
      title: "Festas e Shows",
      description: "Os melhores eventos de música e entretenimento",
    },
    "teatros-e-espetaculos": {
      title: "Teatros e Espetáculos",
      description: "Peças, musicais e apresentações artísticas",
    },
    "reveillon-2026": {
      title: "Réveillon 2026",
      description: "Celebre a virada do ano com os melhores eventos",
    },
    "stand-up-comedy": {
      title: "Stand Up Comedy",
      description: "Ria muito com os melhores comediantes",
    },
    "descontos-exclusivos": {
      title: "Descontos Exclusivos",
      description: "Eventos com preços especiais para você",
    },
    "passeios-e-tours": {
      title: "Passeios e Tours",
      description: "Explore novos lugares e experiências",
    },
    infantil: {
      title: "Infantil",
      description: "Diversão garantida para a criançada",
    },
    esportes: {
      title: "Esportes",
      description: "Competições, partidas e eventos esportivos",
    },
    "congressos-e-palestras": {
      title: "Congressos e Palestras",
      description: "Conhecimento e networking profissional",
    },
    carnaval: {
      title: "Carnaval",
      description: "A maior festa popular do Brasil",
    },
    "cursos-e-workshops": {
      title: "Cursos e Workshops",
      description: "Aprenda novas habilidades e conhecimentos",
    },
    gastronomia: {
      title: "Gastronomia",
      description: "Festivais, degustações e experiências gastronômicas",
    },
    pride: {
      title: "Pride",
      description: "Celebre a diversidade e o orgulho LGBTQIA+",
    },
    "religiao-e-espiritualidade": {
      title: "Religião e Espiritualidade",
      description: "Eventos de fé e bem-estar espiritual",
    },
    "eventos-online": {
      title: "Eventos Online",
      description: "Participe de qualquer lugar do mundo",
    },
    "sympla-play": {
      title: "Sympla Play",
      description: "Conteúdos exclusivos sob demanda",
    },
    "eventos-corporativos": {
      title: "Eventos Corporativos",
      description: "Soluções para empresas e organizações",
    },
  };

// Mock events data
const mockEvents = [
  {
    id: "1",
    title: "Festival de Verão 2025",
    slug: "festival-de-verao-2025",
    image: "/placeholder-event.jpg",
    date: "15 Mar 2025",
    location: "São Paulo, SP",
    price: "R$ 150,00",
    category: "festas-e-shows",
  },
  {
    id: "2",
    title: "Show do Artista XYZ",
    slug: "show-do-artista-xyz",
    image: "/placeholder-event.jpg",
    date: "22 Mar 2025",
    location: "Rio de Janeiro, RJ",
    price: "R$ 80,00",
    category: "festas-e-shows",
  },
  {
    id: "3",
    title: "Hamlet - O Espetáculo",
    slug: "hamlet-o-espetaculo",
    image: "/placeholder-event.jpg",
    date: "10 Abr 2025",
    location: "São Paulo, SP",
    price: "R$ 120,00",
    category: "teatros-e-espetaculos",
  },
  {
    id: "4",
    title: "Comedy Night",
    slug: "comedy-night",
    image: "/placeholder-event.jpg",
    date: "05 Mar 2025",
    location: "Belo Horizonte, MG",
    price: "R$ 60,00",
    category: "stand-up-comedy",
  },
  {
    id: "5",
    title: "Congresso de Tecnologia 2025",
    slug: "congresso-de-tecnologia-2025",
    image: "/placeholder-event.jpg",
    date: "20 Mai 2025",
    location: "Curitiba, PR",
    price: "R$ 350,00",
    category: "congressos-e-palestras",
  },
  {
    id: "6",
    title: "Workshop de Fotografia",
    slug: "workshop-de-fotografia",
    image: "/placeholder-event.jpg",
    date: "12 Abr 2025",
    location: "Porto Alegre, RS",
    price: "R$ 200,00",
    category: "cursos-e-workshops",
  },
];

export default function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const collection = collectionsData[slug];

  if (!collection) {
    notFound();
  }

  const events = mockEvents.filter(
    (event) => event.category === slug || slug === "descontos-exclusivos",
  );

  const [sortBy, setSortBy] = useState<string>("date");

  const sortedEvents = useMemo(() => {
    const sorted = [...events];
    switch (sortBy) {
      case "date":
        return sorted.sort((a, b) => {
          const dateA = new Date(a.date.split(" ").reverse().join("-"));
          const dateB = new Date(b.date.split(" ").reverse().join("-"));
          return dateA.getTime() - dateB.getTime();
        });
      case "date-desc":
        return sorted.sort((a, b) => {
          const dateA = new Date(a.date.split(" ").reverse().join("-"));
          const dateB = new Date(b.date.split(" ").reverse().join("-"));
          return dateB.getTime() - dateA.getTime();
        });
      case "title":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "title-desc":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case "price":
        return sorted.sort((a, b) => {
          const priceA = parseFloat(
            a.price.replace(/[^\d,]/g, "").replace(",", "."),
          );
          const priceB = parseFloat(
            b.price.replace(/[^\d,]/g, "").replace(",", "."),
          );
          return priceA - priceB;
        });
      case "price-desc":
        return sorted.sort((a, b) => {
          const priceA = parseFloat(
            a.price.replace(/[^\d,]/g, "").replace(",", "."),
          );
          const priceB = parseFloat(
            b.price.replace(/[^\d,]/g, "").replace(",", "."),
          );
          return priceB - priceA;
        });
      default:
        return sorted;
    }
  }, [events, sortBy]);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/collections">Coleções</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{collection.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl font-bold md:text-4xl">{collection.title}</h1>
        <p className="mt-2 text-lg">{collection.description}</p>
      </div>
      <Separator />
      <div className="container mx-4 py-8 md:mx-auto">
        {/* Events Grid */}
        {events.length > 0 ? (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                {events.length} evento{events.length !== 1 ? "s" : ""}{" "}
                encontrado
                {events.length !== 1 ? "s" : ""}
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Data (mais próximo)</SelectItem>
                  <SelectItem value="date-desc">
                    Data (mais distante)
                  </SelectItem>
                  <SelectItem value="title">Nome (A-Z)</SelectItem>
                  <SelectItem value="title-desc">Nome (Z-A)</SelectItem>
                  <SelectItem value="price">Preço (menor)</SelectItem>
                  <SelectItem value="price-desc">Preço (maior)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sortedEvents.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  city={event.location}
                  date={event.date}
                  banner={event.image}
                  href={`/event/${event.slug}`}
                />
              ))}
            </div>
          </>
        ) : (
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Calendar />
              </EmptyMedia>
              <EmptyTitle>Nenhum evento</EmptyTitle>
              <EmptyDescription>
                Você ainda não criou nenhum evento.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <div className="flex gap-2">
                <Button>Criar evento</Button>
                <Button asChild variant="outline">
                  <Link href="/collections">Ver outras coleções</Link>
                </Button>
              </div>
            </EmptyContent>
          </Empty>
        )}
      </div>
    </div>
  );
}
