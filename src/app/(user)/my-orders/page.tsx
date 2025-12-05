"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Ticket, Calendar, MapPin, QrCode } from "lucide-react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/components/ui/empty";

type TicketStatus = "active" | "pending" | "cancelled" | "finished";

type OrderTicket = {
  id: string;
  eventTitle: string;
  eventSlug: string;
  eventImage: string;
  eventDate: string;
  eventLocation: string;
  ticketType: string;
  quantity: number;
  orderNumber: string;
  purchaseDate: string;
  status: TicketStatus;
};

// Mock data
const mockTickets: OrderTicket[] = [
  // Exemplo de ingressos - vazio por padrão para mostrar o estado vazio
];

const statusLabels: Record<TicketStatus, string> = {
  active: "Ativos",
  pending: "Pendentes",
  cancelled: "Cancelados",
  finished: "Encerrados",
};

const statusColors: Record<
  TicketStatus,
  "default" | "secondary" | "destructive" | "outline"
> = {
  active: "default",
  pending: "secondary",
  cancelled: "destructive",
  finished: "outline",
};

function TicketCard({ ticket }: { ticket: OrderTicket }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="relative h-32 w-full sm:h-auto sm:w-48">
          <Image
            src={ticket.eventImage}
            alt={ticket.eventTitle}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="flex flex-1 flex-col justify-between p-4">
          <div>
            <div className="mb-2 flex items-start justify-between">
              <Link
                href={`/event/${ticket.eventSlug}`}
                className="text-lg font-semibold hover:text-purple-600 hover:underline"
              >
                {ticket.eventTitle}
              </Link>
              <Badge variant={statusColors[ticket.status]}>
                {statusLabels[ticket.status]}
              </Badge>
            </div>
            <div className="text-muted-foreground space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{ticket.eventDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{ticket.eventLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Ticket className="h-4 w-4" />
                <span>
                  {ticket.quantity}x {ticket.ticketType}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between border-t pt-4">
            <div className="text-muted-foreground text-xs">
              <span>Pedido #{ticket.orderNumber}</span>
              <span className="mx-2">•</span>
              <span>Comprado em {ticket.purchaseDate}</span>
            </div>
            {ticket.status === "active" && (
              <Button size="sm" variant="outline">
                <QrCode className="mr-2 h-4 w-4" />
                Ver ingresso
              </Button>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

function EmptyTickets({ status }: { status: TicketStatus }) {
  const messages: Record<TicketStatus, { title: string; description: string }> =
    {
      active: {
        title: "Não há ingressos para próximos eventos",
        description: "Quando você comprar ingressos, eles aparecerão aqui.",
      },
      pending: {
        title: "Nenhum ingresso pendente",
        description: "Ingressos aguardando pagamento aparecerão aqui.",
      },
      cancelled: {
        title: "Nenhum ingresso cancelado",
        description: "Ingressos cancelados aparecerão aqui.",
      },
      finished: {
        title: "Nenhum evento encerrado",
        description: "Ingressos de eventos passados aparecerão aqui.",
      },
    };

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Ticket />
        </EmptyMedia>
        <EmptyTitle>{messages[status].title}</EmptyTitle>
        <EmptyDescription>{messages[status].description}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button asChild>
          <Link href="/collections">Encontrar eventos</Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
}

export default function MyOrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<TicketStatus>("active");

  const filteredTickets = mockTickets.filter((ticket) => {
    const matchesStatus = ticket.status === activeTab;
    const matchesSearch =
      searchQuery === "" ||
      ticket.eventTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.orderNumber.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 sm:px-0">
        <h1 className="mb-8 text-3xl font-bold">Ingressos</h1>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <Tabs
            value={activeTab}
            onValueChange={(v) => setActiveTab(v as TicketStatus)}
            className="w-full"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <TabsList>
                <TabsTrigger value="active">Ativos</TabsTrigger>
                <TabsTrigger value="pending">Pendentes</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelados</TabsTrigger>
                <TabsTrigger value="finished">Encerrados</TabsTrigger>
              </TabsList>

              <div className="flex gap-2">
                <Input
                  placeholder="Buscar pelo nome, email, ingresso ou pedido"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-80"
                />
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl">
              <TabsContent value="active" className="mt-0">
                {filteredTickets.length > 0 ? (
                  <div className="space-y-4">
                    {filteredTickets.map((ticket) => (
                      <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                  </div>
                ) : (
                  <EmptyTickets status="active" />
                )}
              </TabsContent>

              <TabsContent value="pending" className="mt-0">
                {filteredTickets.length > 0 ? (
                  <div className="space-y-4">
                    {filteredTickets.map((ticket) => (
                      <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                  </div>
                ) : (
                  <EmptyTickets status="pending" />
                )}
              </TabsContent>

              <TabsContent value="cancelled" className="mt-0">
                {filteredTickets.length > 0 ? (
                  <div className="space-y-4">
                    {filteredTickets.map((ticket) => (
                      <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                  </div>
                ) : (
                  <EmptyTickets status="cancelled" />
                )}
              </TabsContent>

              <TabsContent value="finished" className="mt-0">
                {filteredTickets.length > 0 ? (
                  <div className="space-y-4">
                    {filteredTickets.map((ticket) => (
                      <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                  </div>
                ) : (
                  <EmptyTickets status="finished" />
                )}
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
