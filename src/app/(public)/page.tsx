import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";
import SearchInput from "~/components/search-input";
import { Input } from "~/components/ui/input";
import { Skeleton } from "~/components/ui/skeleton";
import { FeaturedEvents } from "~/components/featured-events";

export default async function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8 sm:px-0">
      <div className="mb-2">
        <h1 className="text-2xl font-bold">Bem-vindo ao Trably Events</h1>
        <p className="mt-2 text-gray-600">
          Descubra eventos incríveis perto de você.
        </p>
      </div>
      <div>
        <SearchInput />
      </div>
      <div className="mt-10">
        <FeaturedEvents
          events={[
            {
              id: "rockfun-fest",
              title: "Rockfun Fest",
              city: "São Paulo - SP",
              date: "14 Dez 2025",
            },
            {
              id: "festival-eletronico",
              title: "Festival Eletrônico",
              city: "Rio de Janeiro - RJ",
              date: "20 Jan 2026",
            },
            {
              id: "teatro-classico",
              title: "Teatro Clássico",
              city: "Belo Horizonte - MG",
              date: "11 Fev 2026",
            },
            {
              id: "show-ao-vivo",
              title: "Show ao Vivo",
              city: "Curitiba - PR",
              date: "25 Fev 2026",
            },
          ]}
        />
      </div>
    </main>
  );
}
