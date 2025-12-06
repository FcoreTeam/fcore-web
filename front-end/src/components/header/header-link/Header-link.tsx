"use client";

import clsx from "clsx";
import { Route } from "@/types/types";
import styles from "./header-link.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLink = ({ name, route }: Route) => {
  const pathname = usePathname();
  return (
    <li className={styles.link}>
      <Link href={route} style={{ textDecoration: "none" }}>
        <ul
          className={clsx(
            styles.link__name,
            pathname === route && styles.active
          )}
        >
          {name}
        </ul>
      </Link>
    </li>
  );
};
export default HeaderLink;
