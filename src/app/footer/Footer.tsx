import React from "react";
import LogoFooter from "@/asset/LogoFooter";
import Link from "next/link";
import Facebook from "@/asset/Facebook";
import Instagram from "@/asset/Instagram";
import Xtwitter from "@/asset/Xtwitter";

const Footer = () => {
  return (
    <div className="w-full h-[160px] bg-blackIsh flex items-center justify-between px-4">
      <div className="flex items-center">
        <LogoFooter />
        <nav className="flex flex-col mt-2 gap-y-5 ml-[50px]">
          <Link href="/questions" className="text-white text-sm">
            Questions fréquentes
          </Link>
          <Link href="/about" className="text-white text-sm">
            Qui sommes-nous ?
          </Link>
          <Link href="/contact" className="text-white text-sm">
            Contactez-nous
          </Link>
          <Link href="/objets-trouves" className="text-white text-sm">
            Objets trouvés
          </Link>
        </nav>
        <div className="flex flex-col gap-y-5 mb-[75px] ml-[100px]">
          <Link href="/confidentialite" className="text-white text-sm">
            Politique de confidentialité
          </Link>
          <Link href="/cookies" className="text-white text-sm">
            Cookies
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-white text-sm">Nous suivre:</p>
        <Facebook />
        <Instagram />
        <Xtwitter />
      </div>
    </div>
  );
};

export default Footer;