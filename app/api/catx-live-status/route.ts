import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    // First get Twitch API token using the Twitch API credentials retrieved from the environment variables
    let twitchApiToken: string = "";

    const twitchApiTokenResponse = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENTID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=client_credentials`, {
      method: "POST",
      cache: "no-store",
    });

    if (!twitchApiTokenResponse.ok) throw { status: twitchApiTokenResponse.status, statusText: twitchApiTokenResponse.statusText };
    const twitchApiTokenData: any = await twitchApiTokenResponse.json();
    if (process.env.NODE_ENV === "development") console.log(`Twitch API token response :\n`, twitchApiTokenData);

    twitchApiToken = twitchApiTokenData.access_token;

    // Then get the stream status of the catx channel and the channel that is defined in the env variables to be the fallback one hosting CATx streams on Twitch
    let isCatxLive: boolean = false;

    const twitchApiStreamResponse = await fetch(`https://api.twitch.tv/helix/streams?user_login=${process.env.NEXT_PUBLIC_TWITCH_CHANNELNAME}&user_login=teamcatx`, {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${twitchApiToken}`,
        "Client-Id": process.env.TWITCH_CLIENTID || "",
      },
    });

    if (!twitchApiStreamResponse.ok) throw { status: twitchApiStreamResponse.status, statusText: twitchApiStreamResponse.statusText };
    const twitchApiStreamData: any = await twitchApiStreamResponse.json();
    if (process.env.NODE_ENV === "development") console.log(`Twitch API stream response :\n`, twitchApiStreamData);

    let streamingChannel: string = "";

    if (twitchApiStreamData.data && twitchApiStreamData.data.length > 0) {
      twitchApiStreamData.data.forEach((streamData: any) => {
        if (streamData.title && streamData.title.toLowerCase().includes(process.env.CATX_TRIGGERWORD!.toLowerCase())) {
          isCatxLive = true;
          streamingChannel = streamData.user_login;
        }
      });
    }

    return NextResponse.json({ isCatxLive, streamingChannel }, { headers: { "Cache-Control": "no-store" } });
  } catch (error: any) {
    if (process.env.NODE_ENV === "development") {
      console.log(`Error :\n`, error);
      return NextResponse.json(null, { status: error.status, statusText: error.statusText, headers: { "Cache-Control": "no-store" } });
    } else {
      return NextResponse.json(null, { status: 500, statusText: "Une erreur est survenue lors de la vérification de flux Twitch actif concernant la CATx", headers: { "Cache-Control": "no-store" } });
    }
  }
}
