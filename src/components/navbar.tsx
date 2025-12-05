"use client";
import { Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type NavbarProps = {};

export function Navbar({}: NavbarProps) {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="bg-accent sticky top-0 z-40 w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-0">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Trably Events
        </Link>
        <div className="hidden items-center gap-3 sm:flex">
          {session?.user ? (
            <div className="flex items-center gap-2">
              <Button variant="link" asChild className="font-bold">
                <Link href="/my-orders">Meus ingressos</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost">
                    <div className="flex flex-row items-center gap-2">
                      <div className="bg-background flex size-8 items-center justify-center rounded-full">
                        <User />
                      </div>
                      <p className="text-sm font-medium">
                        {session.user.name ?? "Usuário"}
                      </p>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={() => signOut()}>
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Button asChild variant="outline" size="lg">
              <Link href="/login">Entrar</Link>
            </Button>
          )}
          <Button
            variant="outline"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="rounded-2xl"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
