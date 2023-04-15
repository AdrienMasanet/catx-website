"use client";

import styles from "./ScalesBackground.module.scss";

const ScalesBackground = () => {
  return (
    <div className="-z-10 absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className={styles.background}></div>
    </div>
  );
};

export default ScalesBackground;
