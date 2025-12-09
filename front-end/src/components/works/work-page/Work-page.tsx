"use client";
import clsx from "clsx";
import { Tags } from "@/types/types";
import { Project } from "@/types/types";
import { works } from "../work/works";
import { useState, useEffect } from "react";

import styles from "./work-page.module.scss";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useStartWeb } from "@/hooks/useStartWeb";

const WorkPage = ({ id }: Pick<Project, "id">) => {
  const { theme } = useStartWeb();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const foundProject = works.find((item) => item.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [id]);
  let isApp;
  if (project) {
    isApp = project.tags.includes(Tags.MOBILE);
  }

  if (!project) {
    return <div>Проект не найден</div>;
  }

  return (
    <div
      className={clsx(
        styles.work__page,
        theme === "light" ? styles.background : styles.bg__dark
      )}
    >
      <section className={styles.work}>
        <div className={styles.work__header}>
          <Image
            src={project.image}
            className={styles.work__image}
            height={720}
            width={1280}
            alt="image"
          />
          <div className={styles.work__info}>
            <p className={styles.work__name}>{`Да, это — ${project.name}`}</p>
            <p className={styles.work__description}>{project.description}</p>
            <div className={styles.work__types}>
              {project.stack.map((item) => (
                <div key={item.name} className={styles.type}>
                  <Image
                    src={item.image}
                    alt=""
                    width={30}
                    height={30}
                    className={styles.type__image}
                  />
                  {item.name}
                </div>
              ))}
            </div>
            <p className={styles.designed}>
              {"//"} {project.designed}
            </p>
          </div>
        </div>
        <h2>Статистика проекта</h2>
        <div className={styles.stats}>
          <div className={styles.stats__wrap}>
            <p className={styles.stats__number}>{project.stat1}</p>
            <p className={styles.stats__name}>{project.name1}</p>
          </div>
          <div className={styles.stats__wrap}>
            <p className={styles.stats__number}>{project.stat2}</p>
            <p className={styles.stats__name}>{project.name2}</p>
          </div>
          <div className={styles.stats__wrap}>
            <p className={styles.stats__number}>{project.stat3}</p>
            <p className={styles.stats__name}>{project.name3}</p>
          </div>
          <div className={styles.stats__wrap}>
            <p className={styles.stats__number}>{project.stat4}</p>
            <p className={styles.stats__name}>{project.name4}</p>
          </div>
        </div>
        <h2>Цели проекта</h2>
        <div className={styles.text__wrap}>
          <p
            className={styles.text__description}
            dangerouslySetInnerHTML={{ __html: project.first_desc! }}
          ></p>
          <Image
            className={styles.text__image}
            src={project.image1!}
            alt="image"
            height={720}
            width={1280}
          />
        </div>
        <h2>Этапы работы</h2>
        <div
          className={styles.text__wrap}
          style={{ flexDirection: "row-reverse" }}
        >
          <p
            className={styles.text__description}
            style={{ textAlign: "end", paddingLeft: 30, paddingRight: 0 }}
            dangerouslySetInnerHTML={{ __html: project.second_desc! }}
          ></p>
          <Image
            className={styles.text__image}
            src={project.image2!}
            alt="image"
            height={720}
            width={1280}
          />
        </div>
        <h2>Дополнительная информация</h2>
        <div className={styles.work__btn__wrap}>
          {project.video_src && (
            <a href={project.video_src} className={styles.work__btn}>
              Видео работы
            </a>
          )}

          <a href={project.image_src} className={styles.work__btn}>
            Фото работ
          </a>
          {project.domain === "это дизайн" ? (
            <></>
          ) : (
            <a
              href={
                project.domain.startsWith("http")
                  ? project.domain
                  : `https://${project.domain}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(styles.work__btn, styles.second__btn)}
            >
              {project.domain}
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
