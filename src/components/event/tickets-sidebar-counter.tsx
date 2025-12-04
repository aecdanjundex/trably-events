"use client";

import { Button } from "~/components/ui/button";
import { Plus, Minus } from "lucide-react";

type CounterProps = {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
};

export function TicketsSidebarCounter({
  value,
  onChange,
  min,
  max,
}: CounterProps) {
  const handleAdd = () => {
    if (max === undefined || value < max) {
      onChange(value + 1);
    }
  };

  const handleRemove = () => {
    if (min === undefined || value > min) {
      onChange(value - 1);
    }
  };

  return (
    <div className={`flex items-center gap-3`}>
      <Button
        size="icon-sm"
        type="button"
        onClick={handleRemove}
        color="default"
      >
        <Minus />
      </Button>
      <span className="min-w-6 text-center text-lg font-semibold">{value}</span>
      <Button size="icon-sm" type="button" color="primary" onClick={handleAdd}>
        <Plus />
      </Button>
    </div>
  );
}
