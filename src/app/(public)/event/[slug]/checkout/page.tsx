"use client";
import { useEffect, useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";

function formatTime(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (totalSeconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function CheckoutPage() {
  // Reserve window in minutes
  const reserveMinutes = 10; // adjust as needed
  const deadline = useMemo(
    () => Date.now() + reserveMinutes * 60 * 1000,
    [reserveMinutes],
  );
  const [now, setNow] = useState(Date.now());
  const remaining = Math.max(0, deadline - now);
  const [isConfirming, setIsConfirming] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(id);
  }, []);

  const expired = remaining <= 0;

  const handleConfirm = async () => {
    setIsConfirming(true);
    try {
      // TODO: integrate purchase confirmation (API call)
      await new Promise((r) => setTimeout(r, 800));
      setConfirmed(true);
    } finally {
      setIsConfirming(false);
    }
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Left: steps */}
        <div className="space-y-6 md:col-span-2">
          {/* Countdown banner */}
          <Card>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="text-sm text-gray-500">
                  Reserva do ingresso expira em
                </p>
                <p
                  className={`text-2xl font-semibold ${expired ? "text-red-600" : ""}`}
                >
                  {formatTime(remaining)}
                </p>
              </div>
              <div className="rounded-lg border px-3 py-2 text-sm">
                <p className="font-medium">Rockfun Fest • 5º Lote</p>
                <p className="text-gray-500">1 item</p>
              </div>
            </CardContent>
          </Card>

          {/* Step 1: Recebimento do ingresso */}
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                Recebimento do ingresso
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">JOSÉ JOSÉ</p>
                  <p className="text-sm text-gray-500">
                    aeciodantasjunior@gmail.com
                  </p>
                </div>
                <Button variant="outline">Editar</Button>
              </div>
            </CardContent>
          </Card>

          {/* Step 3: Pagamento e dados do comprador */}
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                Pagamento e dados do comprador
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                {[
                  { label: "Cartão de crédito", badge: "Parcele em até 12x" },
                  { label: "Pix" },
                  { label: "NuPay", badge: "À vista" },
                  { label: "Boleto" },
                  { label: "iFood Benefícios", badge: "À vista" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center justify-between rounded-xl border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-block h-4 w-4 rounded-full border" />
                      <span className="text-sm font-medium">{m.label}</span>
                    </div>
                    {m.badge && (
                      <span className="rounded-full border bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
                        {m.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="flex items-center gap-3">
                <Button
                  className="flex-1"
                  disabled={expired || confirmed || isConfirming}
                  onClick={handleConfirm}
                >
                  {confirmed
                    ? "Compra Confirmada"
                    : isConfirming
                      ? "Confirmando..."
                      : "Confirmar Compra"}
                </Button>
                <Button
                  className="flex-1"
                  variant="outline"
                  disabled={confirmed}
                >
                  Cancelar
                </Button>
              </div>
              <div className="mt-3 rounded-md bg-blue-50 p-3 text-sm text-blue-900">
                O ingresso será liberado somente após o término deste período de
                reserva ou confirmação do pagamento.
              </div>
            </CardContent>
          </Card>

          {expired && !confirmed && (
            <div className="rounded-md bg-red-50 p-3 text-sm text-red-900">
              Tempo de reserva expirado. Selecione novamente um ingresso para
              continuar.
            </div>
          )}
        </div>

        {/* Right: summary */}
        <aside className="space-y-6 md:col-span-1">
          {/* Mini event card */}
          <Card className="rounded-2xl">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="h-14 w-20 overflow-hidden rounded-md bg-gray-100" />
                <div className="text-sm">
                  <p className="font-medium">
                    BAR 1 - SEGUNDA - 29/12/2025 - MARATONA #04
                  </p>
                  <p className="text-gray-500">29 de Dez a 30 de Dez</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order summary */}
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Resumo do Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4">
              <div className="rounded-xl border p-3 text-sm">
                <div className="flex items-center justify-between">
                  <p>
                    <span className="font-medium">
                      1 Ingresso Masculino - 5º Lote
                    </span>
                  </p>
                  <p className="font-medium">R$ 230,00</p>
                </div>
                <p className="mt-1 text-xs text-gray-500">R$ 230,00 cada</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Taxas</span>
                <span className="font-medium">R$ 31,05</span>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Total</span>
                <span className="text-sm font-semibold">R$ 261,05</span>
              </div>
              <p className="text-xs text-gray-500">
                (1 item) • selecione a forma de pagamento
              </p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
