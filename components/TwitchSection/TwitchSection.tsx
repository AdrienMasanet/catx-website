"use client";

import { useState, useEffect, useRef } from "react";
import { TwitchEmbed } from "react-twitch-embed";
import Section from "../Section/Section";

const TwitchSection = () => {
  const [isCatxLive, setIsCatxLive] = useState<boolean>(false);
  const embed = useRef(); // Use a ref instead of state to avoid rerenders

  const handleReady = (event: any) => {
    embed.current = event;
    console.log(event);
  };

  const checkIfCatxIsLive = async () => {
    fetch("/api/catx-live-status", { method: "GET" })
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then((data) => {
        if (process.env.NODE_ENV === "development") console.log(data);
        setIsCatxLive(data.isCatxLive);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    checkIfCatxIsLive();
  }, []);

  if (isCatxLive) {
    return (
      <Section title={"Nous sommes en live"}>
        <TwitchEmbed width={"100%"} channel={process.env.NEXT_PUBLIC_TWITCH_CHANNELNAME} autoplay withChat darkMode={true} onVideoReady={handleReady} />
      </Section>
    );
  }

  return null;
};

export default TwitchSection;
