import catxLogo from "@/public/images/catx_logo.png";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="md:w-5/6 mx-auto h-screen flex flex-col justify-center items-center gap-20 text-catx-white font-bignoodletitling">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <Image className="w-full md:w-auto h-fit select-none" src={catxLogo} alt="CATx logo" width={200} height={200} />
        <div>
          <h1 className="text-7xl">Erreur 404</h1>
          <h2 className="text-3xl">Page non trouvée</h2>
        </div>
      </div>
      <a className="text-catx-white text-3xl underline hover:text-catx-yellow" href="/">
        Retour à la page d&apos;accueil
      </a>
    </div>
  );
}
