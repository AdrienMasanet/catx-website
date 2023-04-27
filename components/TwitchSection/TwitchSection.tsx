"use client";

import { useState, useEffect, useRef } from "react";
import { TwitchEmbed } from "react-twitch-embed";
import Section from "../Section/Section";

const TwitchSection = () => {
  const [isCatxLive, setIsCatxLive] = useState<boolean>(false);
  const [streamingChannel, setStreamingChannel] = useState<string>("");
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
        setStreamingChannel(data.streamingChannel);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    checkIfCatxIsLive();
  }, []);

  if (isCatxLive && streamingChannel) {
    return (
      <Section title={"Nous sommes en live"}>
        <TwitchEmbed width={"100%"} channel={streamingChannel} autoplay withChat darkMode={true} onVideoReady={handleReady} />
      </Section>
    );
  }

  return null;
};

export default TwitchSection;
