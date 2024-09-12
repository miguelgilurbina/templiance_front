import Link from "next/link";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import logo from "../../../public/Templiance Logo.png";

export default function Navbar() {
  return (
    <div className="flex flex-col min-h-min">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
        <div className="flex items-center">
          {/* Replace with your actual logo */}
          <Image src={logo} alt="Templiance Logo" width={50} height={50} />
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
