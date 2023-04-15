"use client";

import { useState, useLayoutEffect, useRef, useCallback } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import catxLogo from "@/public/images/catx_logo.png";
import Image from "next/image";
import Divider from "@/components//Divider/Divider";
import TopBarItem from "./TopBarItem";

const TopBar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutsideMobileMenu = useCallback(
    (event: MouseEvent) => {
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    },
    [isMobileMenuOpen]
  );

  const checkViewportWidth = useCallback(() => {
    if (typeof window !== "undefined") {
      window.innerWidth >= 768 ? setIsSmallScreen(false) : setIsSmallScreen(true);
    }
  }, []);

  function slideToSection(sectionToScrollToId: string) {
    const section = document.getElementById(sectionToScrollToId);
    const offset = window.innerWidth < 768 ? 50 : 0;
    if (section) {
      const sectionY = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: sectionY, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  }

  useLayoutEffect(() => {
    checkViewportWidth();
    window.addEventListener("resize", checkViewportWidth);
    window.addEventListener("click", handleClickOutsideMobileMenu);
    return () => {
      window.removeEventListener("resize", checkViewportWidth);
      window.removeEventListener("click", handleClickOutsideMobileMenu);
    };
  }, [handleClickOutsideMobileMenu, checkViewportWidth]);

  if (isSmallScreen === true) {
    return (
      <header className="pb-12">
        <div className="-top-px z-30 w-full fixed">
          <div className="px-4 py-2 flex justify-between align-middle bg-catx-black/90 border-b-catx-white/10 border-b shadow-md backdrop-blur-sm">
            <Image className="select-none" src={catxLogo} alt="CATx logo" width={50} priority onClick={() => slideToSection("home")} />
            <div
              className="relative w-8 h-8 my-auto transition-all duration-300 ease-out"
              onClick={(event) => {
                event.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              style={{ rotate: isMobileMenuOpen ? "0deg" : "-180deg" }}
            >
              <Bars3Icon className={`absolute text-catx-yellow transition-[opacity,transform] duration-300 ease-catx-ease ${isMobileMenuOpen ? "opacity-0 scale-0" : ""}`} />
              <XMarkIcon className={`absolute text-catx-red transition-[opacity,transform] duration-300 ease-catx-ease ${!isMobileMenuOpen ? "opacity-0 scale-0" : ""}`} />
            </div>
          </div>
          <nav ref={mobileMenuRef} className={`${isMobileMenuOpen ? "" : "py-0 shadow-none"} transition-all duration-700 ease-catx-ease overflow-hidden`} style={{ maxHeight: isMobileMenuOpen ? mobileMenuRef.current?.scrollHeight + "px" : "0px" }}>
            <ul className="py-2 text-center font-bignoodletitling text-2xl text-catx-white bg-catx-black/90 shadow-md backdrop-blur-sm">
              <TopBarItem title={"Teams"} link={"teams"} className="w-fit mx-auto py-1 transition-all duration-500 ease-catx-ease" slideToSectionCallback={slideToSection} />
              <TopBarItem title={"Socials"} link={"socials"} className="w-fit mx-auto py-1 transition-all duration-500 ease-catx-ease" slideToSectionCallback={slideToSection} />
              <TopBarItem title={"About us"} link={"about-us"} className="w-fit mx-auto py-1 transition-all duration-500 ease-catx-ease" slideToSectionCallback={slideToSection} />
              <TopBarItem title={"Contact"} link={"contact"} className="w-fit mx-auto py-1 transition-all duration-500 ease-catx-ease" slideToSectionCallback={slideToSection} />
            </ul>
          </nav>
        </div>
      </header>
    );
  }

  if (isSmallScreen === false) {
    return (
      <header className="mb-20">
        <h1 className="w-full py-5 text-catx-white text-center font-bignoodletitling">
          <Image className="m-auto select-none" src={catxLogo} alt="CATx logo" width={150} priority />
        </h1>
        <Divider />
        <nav>
          <ul className="mt-5 flex justify-center font-bignoodletitling text-4xl text-catx-yellow italic">
            <TopBarItem title={"Teams"} link={"teams"} slideToSectionCallback={slideToSection} />
            <TopBarItem title={"Socials"} link={"socials"} slideToSectionCallback={slideToSection} />
            <TopBarItem title={"About us"} link={"about-us"} slideToSectionCallback={slideToSection} />
            <TopBarItem title={"Contact"} link={"contact"} slideToSectionCallback={slideToSection} />
          </ul>
        </nav>
      </header>
    );
  }

  return null;
};

export default TopBar;
