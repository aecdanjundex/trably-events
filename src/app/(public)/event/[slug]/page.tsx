import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { TicketsSidebar } from "~/components/event/tickets-sidebar";

export default function EventSlugPage() {
  return (
    <main className="container mx-auto py-8">
      {/* Hero banner with blur background and foreground card */}
      <div className="relative">
        <div className="flex flex-col gap-4">
          <div className="">
            <h1 className="text-3xl font-bold">Rockfun Fest</h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span>14 dez · 2025 · 11:00 até 14 dez · 2025 · 21:00</span>
              </div>
            </div>

            <div className="mt-2 text-sm">
              <span>Evento presencial em </span>
              <a href="#" className="underline">
                Centro Esportivo Tietê, São Paulo - SP
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Foreground banner card */}
            <div className="md:col-span-2">
              <div className="bg-accent h-60 rounded-2xl"></div>
            </div>

            {/* Tickets sidebar */}
            <div className="flex flex-col gap-4 md:col-span-1">
              <TicketsSidebar
                items={[
                  {
                    title: "Ingresso Responsável Rockfun Fest 2024",
                    subtitle: "Grátis • Vendas até 14/12/2024",
                    status: "Encerrado",
                  },
                  {
                    title: "Lote Extra",
                    subtitle: "Grátis • Vendas até 14/12/2024",
                    status: "Encerrado",
                  },
                ]}
                ctaLabel="Comprar ingressos"
              />
              <Card className="rounded-2xl p-0">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-full bg-gray-100" />
                    <div className="text-sm">
                      <p className="font-medium">Funlive Concerts</p>
                      <p className="text-gray-500">
                        Organizador oficial do Rockfun Fest
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Button>Ver perfil</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main body */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Description */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold">Descrição do evento</h2>
            <Separator className="my-4" />
            <div className="space-y-4">
              <p className="font-semibold">ROCKFUN FEST - NOVA DATA EM BREVE</p>
              <p>
                Prepare-se para uma experiência inesquecível de rock and roll no
                RockFunFest. O festival será realizado em breve no Centro
                Esportivo Tietê (São Paulo - SP), e traz um lineup repleto de
                super estrelas para agitar o dia inteiro com muita música,
                energia e diversão.
              </p>
              <div>
                <p className="font-semibold">LINEUP CONFIRMADO:</p>
                <ul className="mt-2 list-disc pl-6">
                  <li>Pitty</li>
                  <li>Fresno</li>
                  <li>Lobão</li>
                  <li>Krisium</li>
                  <li>Pavilhão 9</li>
                  <li>Matanza</li>
                  <li>Rockfun Fest convida Névula</li>
                </ul>
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Local:</p>
                <p>Centro Esportivo Tietê</p>
                <p>São Paulo - SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
