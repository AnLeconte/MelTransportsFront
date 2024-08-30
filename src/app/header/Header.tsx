import React from "react";
import LogoHeader from "@/asset/LogoHeader";
import Link from "next/link";
import UserIcon from "@/asset/UserIcon";
import NotificationIcon from "@/asset/NotificationIcon";

const Header = () => {
  return (
    <div className="w-full h-[75px] bg-whiteIsh flex items-center justify-between px-4">
      <div className="flex items-center">
        <LogoHeader />
        <nav className="flex gap-x-8 ml-[50px]">
          <Link href="/itineraire" className="text-blackIsh font-medium">
            Trouver un itinéraire
          </Link>
          <Link href="/lignes" className="text-blackIsh font-medium">
            Nos lignes
          </Link>
          <Link href="/perturbations" className="text-blackIsh font-medium">
            Perturbations
          </Link>
          <Link href="/plan" className="text-blackIsh font-medium">
            Plan du réseau
          </Link>
        </nav>
      </div>

      <div className="flex gap-2 items-center">
        <UserIcon />
        <Link href="/loginpage" className="text-blackIsh font-medium mr-8">Connexion</Link>
        <NotificationIcon />
      </div>
    </div>
  );
};

export default Header;