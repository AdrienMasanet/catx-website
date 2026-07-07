"use client";

type TopbarItemProps = {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  link: string;
  slideToSectionCallback?: (link: string) => void;
};

const TopBarItem = ({ className, style, title, link, slideToSectionCallback }: TopbarItemProps) => {
  return (
    <li className={`${className} md:mx-10 cursor-pointer select-none after:content-[''] after:block after:mx-auto after:w-0 after:h-[0.1em] after:bg-catx-yellow after:transition-[width] after:duration-200 after:ease-catx-ease hover:after:w-full`} style={style} onClick={() => slideToSectionCallback!(link)}>
      {title}
    </li>
  );
};

export default TopBarItem;
