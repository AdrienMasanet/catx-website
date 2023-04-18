import Partner from "@/interfaces/Partner";
import SocialIcon from "../SocialIcon/SocialIcon";
import Image from "next/image";

type PartnersProps = {
  partners: Partner[];
};

const Partners = ({ partners }: PartnersProps) => {
  return (
    <div className="grid justify-center gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, 19%)" }}>
      {partners.map((partner) => {
        return (
          <div className="flex flex-col justify-center items-center mx-0 md:mx-5" key={partner.name}>
            <h4 className="w-fit mx-auto mb-2 md:mb-5 text-center font-bignoodletitling text-xl md:text-2xl text-catx-yellow select-none">{partner.name}</h4>
            <a className="relative w-20 h-20 md:w-40 md:h-40 transition-scale duration-300 hover:scale-105 ease-catx-ease" href={partner.defaultUrl} target="_blank" rel="noreferrer">
              <Image className="object-cover" src={partner.image} alt={`${partner.name}, partenaire de la CATx`} fill sizes="100%" />
            </a>
            <div className="grid justify-center grid-cols-3 lg:flex mt-5 gap-3 lg:gap-5">
              {partner.socials.map((social) => (
                <SocialIcon key={social.name} social={social} scale={20} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Partners;
