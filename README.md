# Site Team CATx

Site officiel de la [Team CATx](https://www.teamcatx.fr), association eSport loi 1901 créée en 2023. Le site présente les équipes, le staff, les partenaires, les réseaux sociaux et l'histoire de la structure, et affiche automatiquement le player Twitch lorsqu'un stream CATx est en direct.

Développé avec [Next.js](https://nextjs.org/) (app router), [Tailwind CSS](https://tailwindcss.com/) et Sass, hébergé sur [Vercel](https://vercel.com/).

## Prérequis

- [Node.js](https://nodejs.org/) 22.x
- [pnpm](https://pnpm.io/)

## Variables d'environnement

Copier `.env.example` vers `.env.local` et renseigner :

| Variable                         | Description                                                       |
| -------------------------------- | ----------------------------------------------------------------- |
| `TWITCH_CLIENTID`                | Client ID de l'application Twitch (API Helix)                     |
| `TWITCH_SECRET`                  | Secret de l'application Twitch                                    |
| `CATX_TRIGGERWORD`               | Mot déclencheur à trouver dans le titre du stream pour l'afficher |
| `NEXT_PUBLIC_TWITCH_CHANNELNAME` | Chaîne Twitch alternative pouvant héberger les streams CATx       |
| `NEXT_PUBLIC_CANONICAL_URL`      | URL canonique du site (utilisée pour le SEO et l'Open Graph)      |

## Développement

```bash
pnpm install
pnpm dev
```

## Production

```bash
pnpm build
pnpm start
```

## Qualité de code

```bash
pnpm lint
```
