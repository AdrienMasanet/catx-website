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
            textToCopyIntoClipboard: "Own3D#4449",
            image: "/images/social/discord.svg",
            tooltip: "Cliquez ici pour copier l'identifiant Discord de Own3D dans votre presse-papier",
          },
          {
            name: "Twitter",
            url: "https://twitter.com/Own3DGuy",
            image: "/images/social/twitter.svg",
          },
        ],
      },
      {
        pseudo: "SunRayzer",
        name: "William T.",
        age: 26,
        role: "Co-président",
        image: "/images/teams/csgo.jpg",
        socials: [
          {
            name: "Discord",
            textToCopyIntoClipboard: "SunRayzer#9975",
            image: "/images/social/discord.svg",
            tooltip: "Cliquez ici pour copier l'identifiant Discord de SunRayzer dans votre presse-papier",
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
