"use client";

import SocialMedia from "@/interfaces/SocialMedia";
import Image from "next/image";

type SocialIconProps = {
  social: SocialMedia;
  scale?: number;
};

const SocialIcon = ({ social, scale = 100 }: SocialIconProps) => {
  function handleOnClick() {
    if (social.textToCopyIntoClipboard && navigator.clipboard) {
      navigator.clipboard.writeText(social.textToCopyIntoClipboard).then(() => {
        window.alert(`${social.textToCopyIntoClipboard} a été copié dans le presse-papier !`);
      });
    }
  }

  return (
    <a
      className={`relative transition-scale duration-300 hover:scale-105 ease-catx-ease cursor-pointer ${scale! < 100 ? "drop-shadow-catx-red-hard-sm" : "drop-shadow-catx-red-hard-md"}`}
      href={social.url}
      target="_blank"
      rel="noreferrer"
      style={{
        width: scale || 100,
        height: scale || 100,
      }}
      onClick={handleOnClick}
      title={social.tooltip}
    >
      <Image src={social.image} alt={`${social.name}`} fill />
    </a>
  );
};

export default SocialIcon;
