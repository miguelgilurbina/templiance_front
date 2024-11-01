import Link from "next/link";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import logo from "../../../public/Templiance Logo.png";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Navbar() {
  const client = createClient();

  const settings = await client.getSingle("settings");
  return (
    <header className="bg-white shadow-sm ">
      <div className="container mx-width min-height px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo & Title*/}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="Templiance Logo" width={50} height={50} />
              <span className="ml-2 text-lg font-bold">TEMPLIANCE</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="hidden md:flex space-x-8 ml-64">
              {settings.data.navigation.map(({ link, label }) => (
                <li key={label} className="text-secondary hover:text-primary">
                  <PrismicNextLink field={link}>{label}</PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Buttons  */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              Log In
            </Button>
            <Button className="bg-accent text-white hover:bg-accent/90">
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
