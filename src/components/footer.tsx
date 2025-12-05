import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent">
      <div className="container mx-auto px-4 py-8 sm:px-0">
        {/* Top brand + app badges */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="font-bold">Trably Events</div>
        </div>

        {/* Navigation columns */}
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-5">
          <div>
            <h4 className="mb-3 text-sm font-semibold">Cidades</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="#">São Paulo</Link>
              </li>
              <li>
                <Link href="#">Rio de Janeiro</Link>
              </li>
              <li>
                <Link href="#">Belo Horizonte</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Categorias</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="#">Shows</Link>
              </li>
              <li>
                <Link href="#">Festivais</Link>
              </li>
              <li>
                <Link href="#">Teatro</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Seja produtor</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="#">Comece a vender</Link>
              </li>
              <li>
                <Link href="#">Ferramentas</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">A Trably</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="#">Sobre</Link>
              </li>
              <li>
                <Link href="#">Carreiras</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Ajuda</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="#">Central de ajuda</Link>
              </li>
              <li>
                <Link href="#">Entre em contato</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social + options */}
        <div className="mt-6 flex items-center justify-between">
          <button className="text-muted-foreground text-sm">
            Mostrar opções
          </button>
          <div className="text-muted-foreground flex items-center gap-3">
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-border my-6 h-px w-full" />

        {/* Legal */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm sm:items-start">
            <Link href="#">Termos e Políticas</Link>
            <Link href="#">Ética e conduta</Link>
            <Link href="#">Mapa do Site</Link>
          </div>
          <div className="text-muted-foreground text-center text-sm sm:text-left">
            Trably © {new Date().getFullYear()} — CNPJ:{" "}
            <span className="font-medium">44.295.500/0001-73</span> — Avenida
            Paulista, 1106, Sala 01 Andar 16 — São Paulo — SP — CEP: 01310-914
          </div>
          <div className="text-muted-foreground text-center text-sm sm:text-left">
            Precisa de ajuda?{" "}
            <Link href="#" className="underline">
              Entre em contato conosco
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
