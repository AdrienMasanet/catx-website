"use client";

import styles from "./TopBarItem.module.scss";

type TopbarItemProps = {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  link: string;
  slideToSectionCallback?: (link: string) => void;
};

const TopBarItem = ({ className, style, title, link, slideToSectionCallback }: TopbarItemProps) => {
  return (
    <li className={`${className} ${styles.container} md:mx-10 cursor-pointer select-none`} style={style} onClick={() => slideToSectionCallback!(link)}>
      {title}
    </li>
  );
};

export default TopBarItem;
