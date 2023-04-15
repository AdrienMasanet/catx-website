import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    // First get Twitch API token using the Twitch API credentials retrieved from the environment variables
    let twitchApiToken: string = "";

    const twitchApiTokenResponse = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENTID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=client_credentials`, {
      method: "POST",
    });

    if (!twitchApiTokenResponse.ok) throw { status: twitchApiTokenResponse.status, statusText: twitchApiTokenResponse.statusText };
    const twitchApiTokenData: any = await twitchApiTokenResponse.json();
    if (process.env.NODE_ENV === "development") console.log(`Twitch API token response :\n`, twitchApiTokenData);

    twitchApiToken = twitchApiTokenData.access_token;

    // Then get the stream status of the channel that is defined in the env variables to be the one hosting CATx streams on Twitch
    let isCatxLive: boolean = false;

    const twitchApiBulbiereStreamResponse = await fetch(`https://api.twitch.tv/helix/streams?user_login=${process.env.NEXT_PUBLIC_TWITCH_CHANNELNAME}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${twitchApiToken}`,
        "Client-Id": process.env.TWITCH_CLIENTID || "",
      },
    });

    if (!twitchApiBulbiereStreamResponse.ok) throw { status: twitchApiBulbiereStreamResponse.status, statusText: twitchApiBulbiereStreamResponse.statusText };
    const twitchApiBulbiereStreamData: any = await twitchApiBulbiereStreamResponse.json();
    if (process.env.NODE_ENV === "development") console.log(`Twitch API stream response for channel ${process.env.NEXT_PUBLIC_TWITCH_CHANNELNAME} :\n`, twitchApiBulbiereStreamData);

    if (twitchApiBulbiereStreamData.data && twitchApiBulbiereStreamData.data.length > 0 && twitchApiBulbiereStreamData.data[0].title && twitchApiBulbiereStreamData.data[0].title.toLowerCase().includes(process.env.CATX_TRIGGERWORD!.toLowerCase())) isCatxLive = true;

    return NextResponse.json({ isCatxLive });
  } catch (error: any) {
    console.error("A", error);
    if (process.env.NODE_ENV === "development") return NextResponse.json(null, { status: error.status, statusText: error.statusText });
    return NextResponse.json(null, { status: 500, statusText: "Une erreur est survenue lors de la vérification de flux Twitch actif concernant la CATx" });
  }
}
