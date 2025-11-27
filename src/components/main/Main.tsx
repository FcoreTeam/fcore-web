"use client";

import Image from "next/image";
import Button from "../@ui/Button/Button";
import styles from "./main.module.scss";
import { slides } from "./slides";
import clsx from "clsx";
import { Autoplay } from "swiper/modules";
import { useStartWeb } from "@/hooks/useStartWeb";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperCore } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const arrowAnimation = {
  hidden: {
    opacity: 0,
    rotate: -30,
    y: 50,
    x: 100,
  },
  visible: {
    opacity: 1,
    rotate: 30,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
  pulse: {
    scale: [1, 1.05, 1],
    y: ["0%", "-5%", "0%"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

const Main = () => {
  const { theme } = useStartWeb();
  const windowWidth = useWindowWidth();

  const introRef = useRef(null);

  const planRef = useRef(null);
  const statsRef = useRef(null);
  const swiperRef = useRef<SwiperCore | null>(null); // Правильный тип
  const partnersRef = useRef(null);

  const isIntroInView = useInView(introRef, { margin: "-20%" });

  const isPlanInView = useInView(planRef, { margin: "-10%" });
  const isStatsInView = useInView(statsRef, { margin: "-10%" });
  const isPartnersInView = useInView(partnersRef, {
    margin: "-10%",
  });

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <main className={clsx(styles.main)}>
      {theme === "light" ? (
        <></>
      ) : (
        <div className={styles.backgroundBlur}></div>
      )}

      {theme === "light" && <></>}

      <section ref={introRef} className={styles.intro}>
        <div className={styles.intro__blur}></div>
        <div className={styles.intro__text}>
          <motion.h1
            initial="hidden"
            animate={isIntroInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            {windowWidth < 479
              ? "Digital агентство"
              : " Студия разработки Digital решений"}
          </motion.h1>

          <motion.h2
            initial="hidden"
            animate={isIntroInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <i className={theme === "dark" ? styles.off : ""}>Воплотим </i>
            <span>идею</span> — в реальность
          </motion.h2>

          <motion.div
            initial="hidden"
            animate={isIntroInView ? ["visible", "pulse"] : "hidden"}
            variants={arrowAnimation}
            className={styles.arrowWrapper}
            transition={{ delay: 0.4 }}
          >
            <Image
              src={
                windowWidth < 574
                  ? "/arrow_562.png"
                  : windowWidth < 768
                  ? "/arrow_mobile.png"
                  : "/arrow.svg"
              }
              height={500}
              width={500}
              alt="Стрелка, указывающая на кнопку"
              className={styles.arrow}
            />
          </motion.div>

          {theme === "light" ? (
            <></>
          ) : (
            <motion.p
              className={styles.press__title}
              initial="hidden"
              animate={isIntroInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.6 }}
            >
              Жми!
            </motion.p>
          )}

          <motion.div
            initial="hidden"
            animate={isIntroInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ delay: 0.8 }}
          >
            <Link href="/brief">
              <Button
                className={styles.order__btn}
                text="Улучшить показатели бизнеса"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className={styles.main__services}>
        <div className={styles.main__header}></div>
        <div className={styles.main__slider}>
          <div className={styles.slider__info}>
            <h2 className={styles.main__title}>
              <span>Создаем</span>. Развиваем. Масштабируем
            </h2>
            <p>
              Проекты — основное направление деятельности агентства. Запускаем
              новые сайты и развиваем уже работающие.
            </p>
            <Button text="Хочу такой же" className={styles.case__btn} />
          </div>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className={styles.swiper__container}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className={styles.swiper__slide}>
                <div className={styles.slide__content}>
                  <div className={styles.slide__type}>{slide.type}</div>
                  <Image
                    src={slide.image}
                    width={1640}
                    height={1420}
                    alt="image"
                    className={styles.image}
                  />
                  <div className={styles.slide__text}>
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                    <div className={styles.slide__info}>
                      <div className={styles.info}>
                        <Image
                          src={
                            slide.stack === "Next JS"
                              ? "/next.png"
                              : slide.stack === "Expo"
                              ? "/expo.png"
                              : ""
                          }
                          alt="nextJS"
                          width={100}
                          height={100}
                          className={styles.info__img}
                        />
                        <p className={styles.info__stack}>{slide.stack}</p>
                      </div>
                      <div className={styles.info}>
                        <Image
                          src={"/time.png"}
                          alt="nextJS"
                          width={100}
                          height={100}
                          className={styles.info__img}
                        />
                        <p className={styles.info__stack}>
                          {slide.deadline}{" "}
                          {slide.deadline === 4
                            ? "Месяца"
                            : slide.deadline === 3.5
                            ? "Месяцев"
                            : ""}
                        </p>
                      </div>
                    </div>
                    <div className={styles.slide__buttons}>
                      <button onClick={slidePrev}></button>
                      <button onClick={slideNext}></button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button text="Хочу такой же" className={styles.case__btn__mobile} />
      </section>

      {/* Остальные секции остаются без изменений */}
      <section ref={planRef} className={styles.work__plan}>
        <motion.h2
          className={styles.work__title}
          initial="hidden"
          animate={isPlanInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          #Планируем <span>работу</span>
        </motion.h2>

        <motion.div
          className={styles.plan__wrap}
          variants={staggerContainer}
          initial="hidden"
          animate={isPlanInView ? "visible" : "hidden"}
        >
          <div className={styles.plan__item}>
            <p>Задание</p> <span>Получили - выполняем</span>
          </div>
          <motion.div className={styles.plan__item} variants={scaleIn}>
            <p>Дизайн</p> <span>Задизайнено для вас</span>
          </motion.div>
          <motion.div className={styles.plan__item} variants={scaleIn}>
            <p>Архитектура</p> <span>Планируем проект</span>
          </motion.div>
          <motion.div className={styles.plan__item} variants={scaleIn}>
            <p>Разработка</p> <span>Творим чудеса</span>
          </motion.div>
          <motion.div className={styles.plan__item} variants={scaleIn}>
            <p>Релиз</p> <span>Мечта сбылась!</span>
          </motion.div>
        </motion.div>
      </section>

      <section ref={statsRef} className={styles.stats__wrap}>
        <div className={styles.main__header}>
          <motion.h2
            className={clsx(styles.work__title, styles.left)}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            #Посмотрите на эти <span>шикарные</span> цифры <i>—</i>
          </motion.h2>
          <motion.div
            className={styles.main__text}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ delay: 0.8 }}
          >
            <p>за ними стоят реальные результаты</p>
          </motion.div>
        </div>

        <motion.div
          className={styles.stats}
          variants={staggerContainer}
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
        >
          <motion.div className={styles.stats__info} variants={scaleIn}>
            <motion.p
              initial={{ scale: 0 }}
              animate={isStatsInView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            >
              24
            </motion.p>
            <span>эксперта в команде</span>
          </motion.div>

          <motion.div className={styles.stats__info} variants={scaleIn}>
            <motion.p
              initial={{ scale: 0 }}
              animate={isStatsInView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
              3
            </motion.p>
            <span>года на рынке</span>
          </motion.div>

          <motion.div className={styles.stats__info} variants={scaleIn}>
            <motion.p
              initial={{ scale: 0 }}
              animate={isStatsInView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            >
              4.8
            </motion.p>
            <span>средний рейтинг</span>
          </motion.div>

          <motion.div className={styles.stats__info} variants={scaleIn}>
            <motion.p
              initial={{ scale: 0 }}
              animate={isStatsInView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            >
              50+
            </motion.p>
            <span>клиентов</span>
          </motion.div>
        </motion.div>
      </section>

      <section ref={partnersRef} className={styles.partners__wrap}>
        <motion.h3
          initial="hidden"
          animate={isPartnersInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          Приступим к работе?
        </motion.h3>

        <motion.div
          className={styles.partners__btns}
          initial="hidden"
          animate={isPartnersInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <Link href="https://t.me/fcoretech">
            <motion.button className={styles.partner__btn} variants={scaleIn}>
              Связаться
            </motion.button>
          </Link>

          <Link href="/brief">
            <motion.button className={styles.partner__btn} variants={scaleIn}>
              Обсудить проект
            </motion.button>
          </Link>
        </motion.div>

        <motion.p
          initial="hidden"
          animate={isPartnersInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.3 }}
        >
          Сотрудничество: <span>fcoreteam@mail.ru</span>
        </motion.p>
      </section>
    </main>
  );
};

export default Main;
