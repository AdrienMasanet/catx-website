import SocialMedia from "@/interfaces/SocialMedia";
import Image from "next/image";

type SocialIconProps = {
  social: SocialMedia;
  scale?: number;
};

const SocialIcon = ({ social, scale = 100 }: SocialIconProps) => {
  return (
    <a className={`relative transition-scale duration-300 hover:scale-105 ease-catx-ease ${scale! < 100 ? "drop-shadow-catx-red-hard-sm" : "drop-shadow-catx-red-hard-md"}`} href={social.url} target="_blank" rel="noreferrer" style={{ width: scale || 100, height: scale || 100 }}>
      <Image src={social.image} alt={`${social.name}`} fill />
    </a>
  );
};

export default SocialIcon;
