"use client";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import React from "react";
import { TicketsSidebarCounter } from "./tickets-sidebar-counter";

type TicketItem = {
  title: string;
  subtitle: string;
  status?: string;
};

export function TicketsSidebar({
  items = [],
  ctaLabel = "Comprar ingressos",
}: {
  items?: TicketItem[];
  ctaLabel?: string;
}) {
  return (
    <Card className="rounded-2xl p-0">
      <CardHeader>
        <CardTitle>Ingressos</CardTitle>
      </CardHeader>
      <Separator />
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <div key={idx} className="rounded-xl p-4">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
              </div>
              <TicketsSidebarCounter
                value={0}
                onChange={() => {}}
                max={10}
                min={1}
              />
            </div>
          </div>
          <Separator />
        </React.Fragment>
      ))}
      <CardContent className="p-4">
        <Button className="w-full" color="primary" size="lg">
          {ctaLabel}
        </Button>
      </CardContent>
    </Card>
  );
}
