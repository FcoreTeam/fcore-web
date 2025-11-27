"use client";
import clsx from "clsx";
import { Tags } from "@/types/types";
import { Project } from "@/types/types";
import { works } from "../work/works";
import { useState, useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";

import styles from "./work-page.module.scss";
import Image from "next/image";
import Button from "@/components/@ui/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
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
        <div className={styles.work__info}>
          <div className={styles.background__elements}>
            <div className={styles.backgroud__element}>Задизайнено</div>
          </div>
          <div className={styles.work__header}>
            <h1 className={styles.work__name}>{project.name}</h1>
          </div>

          <p className={styles.work__description}>{project.description}</p>
          <h2 className={styles.work__subnav}>⭣ Скриншоты</h2>

          <Swiper
            modules={[Navigation, Pagination]}
            className={styles.work__slider}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
            }}
          >
            {project.screenshots.map((item, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <Image
                  src={item}
                  alt=""
                  width={1920}
                  height={1080}
                  className={styles.slider__image}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <h2 className={styles.work__subnav}>⭣ Где потыкать</h2>
          <div className={styles.domain__wrap}>
            {isApp ? (
              <></>
            ) : (
              <>
                <Image
                  src="/www.png"
                  alt=""
                  height={30}
                  width={30}
                  className={clsx(
                    styles.domain__img,
                    theme === "dark" && styles.invert
                  )}
                />
                <p
                  className={clsx(
                    styles.domain,
                    theme === "dark" && styles.invert
                  )}
                >
                  {project.domain}
                </p>
              </>
            )}
          </div>
        </div>
        <div className={styles.work__right}>
          <div className={styles.work__navigation}>
            <div className={styles.nav__wrap}>
              <p>{">"} Видосик</p>
              <p>{">"} На чём клепали</p>
            </div>

            <Button text="Хочу такой же!!!" className={styles.work__btn} />
          </div>
          <p className={styles.work__subtitle}>Теги:</p>
          <div className={styles.work__tags}>
            {project.tags.map((item, index) => (
              <div key={index} className={styles.tag}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
