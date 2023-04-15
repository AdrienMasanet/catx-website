import SocialMedia from "@/interfaces/SocialMedia";

interface TeamMember {
  pseudo: string;
  name: string;
  age: number;
  role: string;
  image: string;
  socials?: SocialMedia[];
}

export default TeamMember;
