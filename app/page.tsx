import Section from "@/components/Section/Section";
import Teams from "@/components/Teams/Teams";
import staffData from "@/data/staffData";
import teamsData from "@/data/teamsData";
import partnersData from "@/data/partnersData";
import catxSocialsData from "@/data/catxSocialsData";
import SocialIcon from "@/components/SocialIcon/SocialIcon";
import Footer from "@/components/Footer/Footer";
import TopBar from "@/components/TopBar/TopBar";
import Partners from "@/components/Partners/Partners";
import dynamic from "next/dynamic";

const DynamicTwitchSection = dynamic(() => import("@/components/TwitchSection/TwitchSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <main id="home" className="relative min-h-screen max-w-6xl mx-auto">
        <TopBar />

        <DynamicTwitchSection />

        <Section title={"Équipes"} id="teams">
          <Teams teams={teamsData} />
        </Section>

        <Section title={"Sociaux"} id={"socials"}>
          <div className="md:w-5/6 mx-auto flex items-center justify-center gap-7 md:gap-20">
            {catxSocialsData.map((social) => (
              <SocialIcon key={social.name} social={social} />
            ))}
          </div>
        </Section>

        <Section title={"Contact"} id={"contact"}>
          <p className="mb-7">Vous souhaitez nous contacter, vous avez une question ou bien encore vous souhaitez rejoindre l&apos;association ? N&apos;hésitez pas à nous envoyer un mail à l&apos;adresse suivante et nous vous répondrons dans les plus brefs délais :</p>

          <h3 className="w-fit mx-auto my-16 text-center font-bignoodletitling text-4xl text-catx-yellow select-none underline hover:drop-shadow-catx-red-hard-sm">
            <a href="mailto:contact@teamcatx.fr" target="_blank" rel="noreferrer">
              contact@teamcatx.fr
            </a>
          </h3>

          <Teams teams={staffData} />

          <h3 className="w-fit mx-auto my-16 text-center font-bignoodletitling text-4xl text-catx-yellow select-none">Partenaires</h3>

          <Partners partners={partnersData} />
        </Section>

        <Section title={"À propos"} id={"about-us"}>
          <p className="mb-7">
            <span className="font-bold">Team CATx</span> est une association eSport sous loi 1901, crée en 2023 par <span className="font-bold">Own3D</span> et <span className="font-bold">SunRayzer</span>. Elle évolue sur CS:GO en ESEA OPEN Season 45, représentée par <span className="font-bold">Akarno</span>, <span className="font-bold">Beze</span>, <span className="font-bold">deN</span>, <span className="font-bold">Magz</span> et <span className="font-bold">Spiritix</span>. <br />
            Nous avons pour objectif de rassembler des passionnés de jeux vidéos et plus particulièrement de sport électronique, de participer à des compétitions en ligne ou en LAN et de promouvoir l&apos;eSport. <span className="font-bold text-catx-yellow italic">Som i serem.</span>
          </p>

          <h3 className="w-fit mx-auto my-16 text-center font-bignoodletitling text-4xl text-catx-yellow select-none">Notre Histoire</h3>

          <h4 className="w-fit mx-auto mt-16 mb-7 text-center font-bignoodletitling text-2xl text-catx-yellow select-none">CATx Team | 2009 - 2011</h4>
          <p className="mb-7 md:mb-10">
            Notre histoire commence aux alentours de 2006-2007 lorsque <span className="font-bold">Own3D</span>, joueur casual de CS1,6 et CSS, se balade sur differents serveurs remplis de clans. Ayant découvert le jeu grâce à l&apos;emission &quot;Arena Online&quot; et fasciné par la compétition notamment grâce aux equipes telles que <span className="font-bold">*aAa*</span> et <span className="font-bold">D4</span>, il décide de donner un no à son duo de l&apos;époque : <span className="font-bold">WTFT</span>.{" "}
          </p>
          <p>Passionné par CS mais sans aucune ambition particulière, il rejoint sur console son groupe d&apos;amis IRL, tous joueurs de CoD 6. Le groupe portera un premier clan tag nommé [CAT*], en référence aux joueurs arborant ce style de clan tag pour representer leur pays tels que [FRA*], [ENG*]... </p>
          <p className="mb-7 md:mb-10">
            Ils décideront d&apos;arborer fierement le <span className="font-bold">[CAT*]</span> en référence à la catalogne, terre reunissant le groupe d&apos;amis. Le clantag évoluera par la suite en <span className="font-bold">CATx</span> sur MW3, c&apos;est ainsi que <span className="font-bold">CATx Team</span> verra le jour. L&apos;équipe participera à de nombreux matchs S&D FR via les forums de l&apos;époque tels que JVC et forums de teams aux alentours de 2011-2012. Le goût de la compétition ne faisait que grandir.{" "}
          </p>
          <p className="mb-7 md:mb-10">
            C&apos;est alors que le forum <span className="font-bold">CODNation</span> ouvrira ses portes, un tournoi online only S&D réservé aux équipes françaises de JVC. Le hasard fera bien les choses et <span className="font-bold">CATx Team</span> affrontera en ouverture de bracket l&apos;équipe <span className="font-bold">iROZ</span> de <span className="font-bold">SunRayzer</span>. Le score est sans appel : 2-0 pour CATx. Cette défaite mènera <span className="font-bold">SunRayzer</span> à dissoudre <span className="font-bold">iROZ</span> et rejoindra <span className="font-bold">CATx Team</span>.{" "}
          </p>
          <p className="mb-7 md:mb-10">
            Ces multiples participations aux tournois FR et matchs feront grandir un microscopique intéret autour de <span className="font-bold">CATx Team</span> qui sera recrutée par une structure multigaming du nom de <span className="font-bold">DsM</span>.
            <br />
            Fiers de leur parcours et orgueilleux, les catalans garderont leur clantag et se renommeront : <span className="font-bold">CATx.DsM</span>.
          </p>
          <p className="mb-7 md:mb-10">
            Entre discours et promesses non tenues, <span className="font-bold">CATx</span> mettra fin à son partenariat avec DsM en 2013 et décide de faire cavalier seul, c&apos;est alors que <span className="font-bold">CATx</span> deviendra pour la première fois une structure multigaming à part entiere : c&apos;est la naissance de <span className="font-bold">CATx eSport</span>.
          </p>

          <h4 className="w-fit mx-auto mt-16 mb-7 text-center font-bignoodletitling text-2xl text-catx-yellow select-none">CATx eSport | 2011 - 2017</h4>
          <p className="mb-7 md:mb-10">
            Les catalans évoluent désormais sur BO2, de nombreux joueurs arrêtent la compétition, <span className="font-bold">Own3D</span> se place en retrait et travaille dans l&apos;ombre pour faire évoluer la structure. CATx eSport recrute de nombreux rosters BO2, <span className="font-bold">CATx.DarKrystal</span> évoluant en Decerto, <span className="font-bold">CATx.LoL</span>, <span className="font-bold">CATx.EPIC</span> évoluant en eSniping, et d&apos;autres en tout genre. Le but initial était de devenir une communauté forte et reconnue.{" "}
          </p>
          <p className="mb-7 md:mb-10">
            La consécration est atteinte lorsque le roster <span className="font-bold">EPIC</span> participe à l&apos;ODC G4G eSniping et se hisse en finale du tounoi contre les anglais de <span className="font-bold">ThirdEyeSniping</span> équipe reconnue comme top. Le match sera diffusé en live sur le site de <span className="font-bold">Millenium</span>, le tout casté par <span className="font-bold">WaRTeK</span>. <span className="font-bold">EPIC</span> perdra le match 3-2 mais la performance de l&apos;équipe était suffisamment remarquable. <span className="font-bold">EPIC</span> signera dans une autre structure semi-professionnelle à l&apos;issue de cette performance et CATx eSport essaiera de rebondir sur ce resultat pour devenir officiellement une association eSport. De nombreuses discussions avec des collaborateurs et partenaires ont lieu grâce à ce tout nouvel intérêt autour de CATx eSport, mais cela n&apos;aboutit à rien... Une longue traversée du désert commence et CATx eSport s&apos;éteint pour redevenir ce qu&apos;elle était : une équipe d&apos;amis.
          </p>
          <p className="mb-7 md:mb-10">
            Own3D retourne à son premier amour aux alentours de 2014 sur CS:GO, toujours accompagné de <span className="font-bold">SunRayzer</span> et <span className="font-bold">Anagane</span>, ils seront rejoint par <span className="font-bold">Maza</span>, (qui a toujours gravité autour de CATx), ainsi que <span className="font-bold">Bulbiere</span>. Toujours passionnés par CS, <span className="font-bold">Own3D</span> et <span className="font-bold">SunRayzer</span> rêvent encore d&apos;hisser CATx au rang d&apos;association eSport officielle. C&apos;est en 2017 que l&apos;idée ressurgit, première assemblée générale, premières discussions, intégration d&apos;un staff... Mais aucun accord n&apos;est trouvé. L&apos;équipe se contente de jouer et passer du bon temps, comme à son habitude.
          </p>

          <h4 className="w-fit mx-auto mt-16 mb-7 text-center font-bignoodletitling text-2xl text-catx-yellow select-none">Team CATx | 2023</h4>
          <p>
            <span className="font-bold">SunRayzer</span> et <span className="font-bold">Own3D</span> décident alors en 2023 de se lancer à deux dans l&apos;aventure, et construisent alors un réel projet : celui de lancer leur équipe CS:GO en apportant tout le soutien nécéssaire, toute leur passion. <span className="font-bold">Team CATx</span> devient alors officiellement une association sous loi 1901 le 24 Janvier 2023. Le projet est simple : lancer une équipe CS:GO, donner les clés à de jeunes talents en leur ouvrant la voie et en leur permettant de faire briller leur potentiel dans le milieu de l&apos;eSport.
          </p>
        </Section>
      </main>

      <Footer />
    </>
  );
}
