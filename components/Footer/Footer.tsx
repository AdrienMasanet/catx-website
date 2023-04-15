"use client";

import catxLogo from "@/public/images/catx_logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-catx-black border-catx-white/10 border-t-2 text-catx-white shadow-md">
      <div className="p-5">
        <Image className="mx-auto select-none" src={catxLogo} alt="CATx logo" width={100} />
      </div>
      <div className="py-2 text-catx-white/30 text-center text-xs border-catx-white/10 border-t">Catx - {new Date().getFullYear()} </div>
    </footer>
  );
};

export default Footer;
