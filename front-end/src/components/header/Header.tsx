"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import { routes } from "./routes";
import HeaderLink from "./header-link/Header-link";
import { useStartWeb } from "@/hooks/useStartWeb";
import { useState, useEffect } from "react";
import HeaderMenu from "./header-menu/Header-menu";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isScrolled, setScrolled] = useState<boolean>(false);
  const { theme } = useStartWeb();
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = pathname === "/";
  const shouldHideHeader = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={`${styles.header} ${
          shouldHideHeader ? styles.header_hidden : ""
        }`}
      >
        <Link href="/">
          <Image
            src={theme === "dark" ? "/Fcore.svg" : "/fcore_dark.svg"}
            alt=""
            width={1000}
            height={500}
            className={styles.header__logo}
          />
        </Link>
        <div className={styles.header__menu}>
          {routes.map((item, index) => (
            <HeaderLink key={index} {...item} />
          ))}
        </div>
        <div className={styles.header__social}>
          <div className={styles.header__burger} onClick={() => setOpen(true)}>
            <p>Меню</p>
            <div className={styles.burger}>
              <span></span>
            </div>
          </div>
          <Link href="https://vk.com/fcoreteam">
            <Image
              src="/vk.svg"
              alt=""
              width={256}
              height={256}
              className={styles.social}
            />
          </Link>

          <Link href="https://t.me/fcoreteam">
            <Image
              src="/telegram.png"
              alt=""
              width={256}
              height={256}
              className={styles.social}
            />
          </Link>
        </div>
      </header>
      <HeaderMenu setOpen={setOpen} isOpen={isOpen} />
    </>
  );
};

export default Header;
