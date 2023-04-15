import TeamMember from "@/interfaces/TeamMember";

interface Team {
  name: string;
  description: string;
  members: TeamMember[];
}

export default Team;
