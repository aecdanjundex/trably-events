"use client";
import { Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

type NavbarProps = {};

export function Navbar({}: NavbarProps) {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="bg-accent sticky top-0 z-40 w-full">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Trably Events
        </Link>
        <div className="flex items-center gap-3">
          {session?.user ? (
            <div className="flex items-center gap-2">
              <div className="bg-background flex size-8 items-center justify-center rounded-full">
                <User />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-medium">
                  {session.user.name ?? "Usuário"}
                </p>
                {session.user.email && (
                  <p className="text-xs text-gray-500">{session.user.email}</p>
                )}
              </div>
              <Button variant="link" onClick={() => signOut()}>
                Sair
              </Button>
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
