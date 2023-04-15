import Image from "next/image";
import styles from "./Teams.module.scss";

type MemberProps = {
  pseudo: string;
  image: string;
  reviewing: boolean;
};

const Member = ({ pseudo, image, reviewing }: MemberProps) => {
  return (
    <div className={`${styles.playercontainer} h-full cursor-pointer transition-all ease-catx-ease duration-500 ${reviewing ? "!opacity-100" : "opacity-20 hover:opacity-80"} -skew-x-12 select-none`}>
      <div className="relative flex flex-col h-full overflow-hidden">
        <div className="md:text-2xl border-t-2 border-catx-black mt-auto bg-catx-white">
          <p className={`${styles.playername} ${reviewing ? "!bg-catx-yellow" : ""} lg:p-2 text-center font-bignoodletitling md:text-lg lg:text-2xl text-catx-black`}>{pseudo}</p>
        </div>
        <Image className="-z-10 object-cover md:skew-x-12 overflow-visible" src={image} alt={`${pseudo} logo`} fill sizes="100%" />
      </div>
    </div>
  );
}; /*  w-14 md:w-32 lg:w-40 xl:w-52 mx-auto */
export default Member;
