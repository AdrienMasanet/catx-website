import SocialMedia from "@/interfaces/SocialMedia";
import Image from "next/image";

type SocialIconProps = {
  social: SocialMedia;
  scale?: number;
};

const SocialIcon = ({ social, scale = 100 }: SocialIconProps) => {
  return (
    <a href={social.url} target="_blank" rel="noreferrer">
      <Image className={`md:h-auto transition-scale duration-300 hover:scale-105 ease-catx-ease ${scale! < 100 ? "drop-shadow-catx-red-hard-sm" : "drop-shadow-catx-red-hard-md"}`} src={social.image} alt={`${social.name}`} width={scale} height={scale} style={{ width: scale || 100, height: "auto" }} />
    </a>
  );
};

export default SocialIcon;
