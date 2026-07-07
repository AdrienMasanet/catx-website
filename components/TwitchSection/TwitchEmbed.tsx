"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Twitch?: {
      Embed: new (element: HTMLElement, options: Record<string, unknown>) => unknown;
    };
  }
}

const TWITCH_EMBED_SCRIPT_URL = "https://embed.twitch.tv/embed/v1.js";

type TwitchEmbedProps = {
  channel: string;
};

// Thin wrapper around the official Twitch embed script, which used to be
// provided by the react-twitch-embed package before it stopped being
// maintained and stayed locked on react 18
const TwitchEmbed = ({ channel }: TwitchEmbedProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    const createEmbed = () => {
      if (cancelled || !window.Twitch || !container) return;

      container.replaceChildren();
      new window.Twitch.Embed(container, {
        width: "100%",
        height: 480,
        channel,
        layout: "video-with-chat",
        theme: "dark",
        autoplay: true,
        parent: [window.location.hostname],
      });
    };

    if (window.Twitch) {
      createEmbed();
    } else {
      let script = document.querySelector<HTMLScriptElement>(`script[src="${TWITCH_EMBED_SCRIPT_URL}"]`);

      if (!script) {
        script = document.createElement("script");
        script.src = TWITCH_EMBED_SCRIPT_URL;
        script.async = true;
        document.body.appendChild(script);
      }

      script.addEventListener("load", createEmbed);
    }

    return () => {
      cancelled = true;
      container.replaceChildren();
    };
  }, [channel]);

  return <div ref={containerRef} />;
};

export default TwitchEmbed;
