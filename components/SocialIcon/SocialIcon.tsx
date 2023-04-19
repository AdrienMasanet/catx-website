"use client";

import SocialMedia from "@/interfaces/SocialMedia";
import Image from "next/image";

type SocialIconProps = {
  social: SocialMedia;
  scale?: number;
};

const SocialIcon = ({ social, scale = 100 }: SocialIconProps) => {
  const commonProps = {
    className: `relative transition-scale duration-300 hover:scale-105 ease-catx-ease cursor-pointer ${scale < 100 ? "drop-shadow-catx-red-hard-sm" : "drop-shadow-catx-red-hard-md"}`,
    style: {
      width: scale,
      height: scale,
    },
    title: social.tooltip,
  };

  function handleOnClick() {
    if (social.textToCopyIntoClipboard && navigator.clipboard) {
      navigator.clipboard.writeText(social.textToCopyIntoClipboard).then(() => {
        window.alert(`${social.textToCopyIntoClipboard} a été copié dans le presse-papier !`);
      });
    }
  }

  if (social.url)
    return (
      <a {...commonProps} href={social.url} target="_blank" rel="noreferrer">
        <Image src={social.image} alt={`${social.name}`} fill />
      </a>
    );

  if (social.textToCopyIntoClipboard)
    return (
      <div {...commonProps} onClick={handleOnClick}>
        <Image src={social.image} alt={`${social.name}`} fill />
      </div>
    );

  return null;
};

export default SocialIcon;
