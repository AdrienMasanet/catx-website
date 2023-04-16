import Team from "@/interfaces/Team";

const staffData: Team[] = [
  {
    name: "Staff",
    description: "Counter-Strike: Global Offensive is a first-person shooter video game developed by Hidden Path Entertainment and Valve Corporation. It is the fourth game in the Counter-Strike series and was released for Windows, OS X, Xbox 360, and PlayStation 3 in August 2012, while the Linux version was released in 2014.",
    members: [
      {
        pseudo: "Own3D",
        name: "Manuel R.",
        age: 26,
        role: "Fondateur / Président",
        image: "/images/teams/csgo.jpg",
        socials: [
          {
            name: "Discord",
            url: "https://steamcommunity.com/id/bezeeeee/",
            image: "/images/social/discord.svg",
          },
          {
            name: "Twitter",
            url: "https://www.faceit.com/fr/players/beze_",
            image: "/images/social/twitter.svg",
          },
        ],
      },
      {
        pseudo: "Sunrayzer",
        name: "William T.",
        age: 26,
        role: "Co-président",
        image: "/images/teams/csgo.jpg",
        socials: [
          {
            name: "Discord",
            url: "https://steamcommunity.com/id/AkarnoO",
            image: "/images/social/discord.svg",
          },
          {
            name: "Twitter",
            url: "https://www.faceit.com/fr/players/AkarnOob",
            image: "/images/social/twitter.svg",
          },
        ],
      },
      {
        pseudo: "Maza",
        name: "Adrien M.",
        age: 27,
        role: "Développeur",
        image: "/images/teams/csgo.jpg",
        socials: [
          {
            name: "Site",
            url: "https://adrienmasa.net",
            image: "/images/social/adrienmasanet.svg",
          },
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/adrienmasanet/",
            image: "/images/social/linkedin.svg",
          },
        ],
      },
    ],
  },
];

export default staffData;
