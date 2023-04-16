"use client";

import styles from "./Teams.module.scss";
import Team from "@/interfaces/Team";
import TeamMember from "@/interfaces/TeamMember";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState, useEffect, useRef } from "react";
import Member from "./Member";
import SocialIcon from "../SocialIcon/SocialIcon";

type TeamsProps = {
  teams: Team[];
};

const Teams = ({ teams }: TeamsProps) => {
  const [teamReviewing, setTeamReviewing] = useState<Team | null>(teams[0] || null);
  const [memberReviewing, setMemberReviewing] = useState<TeamMember | null>(teams[0].members[0] || null);
  const [gameTitlePositions, setGameTitlePositions] = useState<number[]>([]);
  const gamesListRef = useRef<HTMLDivElement>(null);

  function changeReviewingTeam(direction: "left" | "right") {
    setTeamReviewing((prev) => {
      if (!prev) return null;
      const index = teams.indexOf(prev);
      const newIndex = direction === "left" ? index - 1 : index + 1;
      const wrappedIndex = (newIndex + teams.length) % teams.length;
      setMemberReviewing(teams[wrappedIndex].members[0]);
      return teams[wrappedIndex];
    });
  }

  // Each time the team reviewing changes, we set the first member of the team as the member currently reviewing
  useEffect(() => {
    setMemberReviewing(teamReviewing?.members[0] || null);
  }, [teamReviewing]);

  // Each time the team reviewing changes, we set the position of the game titles
  useEffect(() => {
    if (gamesListRef.current) {
      const newPositions = teams.map((team) => {
        return teams.indexOf(team) * 100 - teams.indexOf(teamReviewing!) * 100;
      });
      setGameTitlePositions(newPositions);
    }
  }, [gamesListRef, teams, teamReviewing]);

  if (!teamReviewing)
    return (
      <h3>
        Une erreur est survenue
        <br />
        Nous corrigeons cela au plus vite
        <br />
        Merci de votre compréhension
      </h3>
    );

  return (
    <div>
      <div className="w-fit mx-auto flex items-center gap-5 transition-all">
        {teams.length > 1 && (
          <div className={`z-20 ${styles.chevron} transition-all`} onClick={() => changeReviewingTeam("left")}>
            <ChevronLeftIcon className={`${styles.left} h-10 text-catx-white cursor-pointer`} />
          </div>
        )}

        <div ref={gamesListRef} className="w-56 md:w-72 relative flex gap-10 flex-nowrap select-none">
          {gamesListRef.current &&
            teams.map((team, index) => (
              <div className={`${teams.indexOf(team) === teams.indexOf(teamReviewing) ? "z-10 bg-catx-black border shadow-lg" : ""} absolute left-2/4 px-2 py-1 text-catx-white text-center border-catx-white/10 rounded-lg overflow-visible whitespace-nowrap -translate-x-2/4 -translate-y-2/4 transition-all duration-500 ease-catx-ease`} key={team.name} style={{ marginLeft: gameTitlePositions[index], opacity: team === teamReviewing ? 1 : 0.6 - Math.abs(index - teams.indexOf(teamReviewing)) / 4, scale: 1 - Math.abs(index - teams.indexOf(teamReviewing)) / 5 }}>
                {team.name}
              </div>
            ))}
        </div>

        {teams.length > 1 && (
          <div className={`z-20 ${styles.chevron} transition-all`} onClick={() => changeReviewingTeam("right")}>
            <ChevronRightIcon className={`${styles.right} h-10 text-catx-white cursor-pointer`} />
          </div>
        )}
      </div>

      <div className="h-fit mx-5 mt-10 flex flex-row justify-center items-center gap-1 lg:gap-4">
        {teamReviewing.members.map((member) => (
          <div className="max-w-xs basis-0 shrink grow h-36 md:h-48 lg:h-72 overflow-visible" key={member.pseudo} onClick={() => setMemberReviewing(member)}>
            <Member pseudo={member.pseudo} image={member.image} reviewing={memberReviewing?.pseudo === member.pseudo} />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-10 mx-auto px-5 py-4 bg-catx-black border border-catx-white/10 rounded-lg shadow-lg">
        <div className="font-bold">
          <p>
            Pseudo : <span className="font-thin">{memberReviewing?.pseudo}</span>
          </p>
          <p>
            Prénom : <span className="font-thin">{memberReviewing?.name}</span>
          </p>
          <p>
            Âge : <span className="font-thin">{memberReviewing?.age}</span>
          </p>
          <p>
            Rôle : <span className="font-thin">{memberReviewing?.role}</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {memberReviewing?.socials?.map((social) => (
            <SocialIcon key={social.name} social={social} scale={30} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
