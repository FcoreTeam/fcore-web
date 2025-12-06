"use client";

import clsx from "clsx";
import styles from "./about.module.scss";
import { useStartWeb } from "@/hooks/useStartWeb";
import Image from "next/image";
import { Stack } from "./stack";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
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
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const About = () => {
  const { theme } = useStartWeb();

  return (
    <div
      className={clsx(
        styles.about,
        theme === "light" ? styles.background : styles.background__dark
      )}
    >
      <motion.p
        className={styles.about__map}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {">"} Главная / <span>Фкорррр</span>
      </motion.p>

      <motion.h1
        className={styles.about__title}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        #Фкор - <span>что же это?</span>
      </motion.h1>

      <motion.div
        className={styles.about__wrap}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className={styles.team__wrap} variants={fadeIn}>
          <section className={styles.about__team}>
            Фкор — это эксперты в области веб-разработки и digital-решений. Мы
            создаем продукты, которые приносят результат.
          </section>
          <Link
            href={"./fcore.pdf"}
            download="fcore.pdf"
            className={styles.link}
          >
            <motion.button
              className={styles.download__btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/download.svg"
                width={40}
                height={40}
                alt="download"
              />
              <p>Скачать презентацию</p>
            </motion.button>
          </Link>
        </motion.div>

        <motion.p className={styles.team__speaker} variants={fadeIn}>
          © Генеральный директор
        </motion.p>
      </motion.div>

      <motion.h2
        className={clsx(styles.about__subtitle, styles.second)}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        #Лучшая команда
      </motion.h2>

      <motion.section
        className={styles.team__slider}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className={styles.member} variants={scaleIn}>
          <Image
            src="/andrew.png"
            height={1260}
            width={1260}
            className={styles.member__image}
            alt=""
          />
          <p className={styles.member__name}>Андрей</p>
          <p className={styles.member__role}>Я генеральный директор</p>
        </motion.div>
        <motion.div className={styles.member} variants={scaleIn}>
          <Image
            src="/user.png"
            height={260}
            width={260}
            className={styles.member__image}
            alt=""
          />
          <p className={styles.member__name}>Никита</p>
          <p className={styles.member__role}>Я операционный директор</p>
        </motion.div>
        <motion.div className={styles.member} variants={scaleIn}>
          <Image
            src="/amin.jpg"
            height={260}
            width={260}
            className={styles.member__image}
            alt=""
          />
          <p className={styles.member__name}>Амин</p>
          <p className={styles.member__role}>Я арт-директор</p>
        </motion.div>
        <motion.div className={styles.member} variants={scaleIn}>
          <Image
            src="/mike.jpg"
            height={1260}
            width={1260}
            className={styles.member__image}
            alt=""
          />
          <p className={styles.member__name}>Мишаня</p>
          <p className={styles.member__role}>Я маркетинговый директор</p>
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.stack}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className={styles.about__title}>
          #Современный <span>стек</span>{" "}
        </h2>
        <motion.p
          className={styles.about__info}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Мы знаем - что лучше подойдет для вашего проекта
        </motion.p>
        <motion.div
          className={styles.stack__wrap}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {Stack.map((item, index) => (
            <motion.div
              key={index}
              className={styles.stack__item}
              variants={scaleIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Image
                src={item.image}
                alt=""
                width={110}
                height={100}
                className={styles.stack__image}
              />
              <div className={styles.stack__info}>
                <p className={styles.stack__name}>{item.name}</p>
                <p className={styles.stack__description}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
