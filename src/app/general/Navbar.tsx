import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function Navbar() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
        <div className="flex items-center">
          {/* Replace with your actual logo */}
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2 2 7l10 5 10-5-10-5Z" />
            <path d="m2 17 10 5 10-5" />
            <path d="m2 12 10 5 10-5" />
          </svg>
          <span className="ml-2 text-xl font-bold">TEMPLIANCE</span>
        </div>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/plantillas">Plantillas</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/nosotros">Nosotros</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contacto">Contacto</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
}
