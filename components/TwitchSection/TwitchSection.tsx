"use client";

import { useState, useEffect } from "react";
import Section from "../Section/Section";
import TwitchEmbed from "./TwitchEmbed";

const TwitchSection = () => {
  const [isCatxLive, setIsCatxLive] = useState<boolean>(false);
  const [streamingChannel, setStreamingChannel] = useState<string>("");

  const checkIfCatxIsLive = async () => {
    fetch("/api/catx-live-status", {
      method: "GET",
      cache: "no-store",
    })
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
        <TwitchEmbed channel={streamingChannel} />
      </Section>
    );
  }

  return null;
};

export default TwitchSection;
