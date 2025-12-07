"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Project, Tags } from "@/types/types";
import styles from "./work.module.scss";

const Work = ({ name, image, tags, domain, id }: Project) => {
  const isApp = tags.includes(Tags.MOBILE);

  const handleDomainClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    window.open("https://" + domain);
  };
  return (
    <Link href={`/cases/${id}`} className={styles.work}>
      <Link
        href={domain}
        onClick={handleDomainClick}
        className={clsx(styles.work__domain, isApp && styles.app)}
      >
        {isApp && (
          <Image
            src="/rustore.svg"
            height={120}
            width={60}
            alt="rustore"
            className={styles.rustore}
          />
        )}
        {!isApp && domain}
      </Link>
      <Image
        src={image}
        alt={name}
        width={1920}
        height={1080}
        className={styles.work__image}
      />

      <div className={styles.work__footer}>
        <p className={styles.work__name}>{name}</p>
        <div className={styles.work__tags}>
          {tags.map((item, index) => (
            <div key={index} className={styles.tag}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};
export default Work;
