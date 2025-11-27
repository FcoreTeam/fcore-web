"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { useStartWeb } from "@/hooks/useStartWeb";
import styles from "./contacts.module.scss";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Contacts = () => {
  const { theme } = useStartWeb();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      key={theme}
      className={clsx(
        styles.contacts,
        theme === "light" ? styles.background : styles.background__dark
      )}
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <motion.p
        className={styles.contacts__map}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        variants={fadeIn}
      >
        {">"} Главная / <span>Наши услуги</span>
      </motion.p>

      <motion.h1
        className={styles.contacts__title}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ delay: 0.1 }}
      >
        #Контакты - <span>свяжитесь</span> с нами
      </motion.h1>

      <motion.section
        className={styles.contacts__section}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.div
          className={styles.contacts__block}
          variants={scaleIn}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <motion.p className={styles.block__title} variants={fadeIn}>
            Об организации
          </motion.p>
          <motion.p className={styles.block__info} variants={fadeIn}>
            Название: <span>ИП Филиппов Михаил Сергеевич</span>
          </motion.p>
          <motion.p className={styles.block__info} variants={fadeIn}>
            ИНН: <span>381023096275</span>
          </motion.p>
          <motion.p className={styles.block__info} variants={fadeIn}>
            ОГРНИП: <span>324385000057225</span>
          </motion.p>
          <motion.p className={styles.block__info} variants={fadeIn}>
            Основатель: <span>Николаев Андрей Кириллович</span>
          </motion.p>
          <motion.p className={styles.block__info} variants={fadeIn}>
            Операционный директор: <span>Ханухов Алэн Эдуардович</span>
          </motion.p>
          {/* <motion.p className={styles.block__info} variants={fadeIn}>
            ОКВЭД: <span>62.01 (Разработка программного обеспечения)</span>
          </motion.p> */}
        </motion.div>

        <motion.div
          className={styles.contacts__block}
          variants={scaleIn}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <motion.p
            className={clsx(styles.block__title, styles.second)}
            variants={fadeIn}
          >
            Контактная информация
          </motion.p>
          <motion.p className={styles.block__info} variants={fadeIn}>
            Почта для сотрудничества: <span>fcoreteam@mail.ru</span>
          </motion.p>
          <motion.p className={styles.block__info} variants={fadeIn}>
            Генеральный директор: <span>8 (977) 597-77-34</span>
          </motion.p>
          <motion.p className={styles.block__info} variants={fadeIn}>
            Операционный директор: <span>8 (985) 070-80-57</span>
          </motion.p>
          <motion.p className={styles.block__info} variants={fadeIn}>
            ВКонтакте: <span>@fcoreteam</span>
          </motion.p>
          <motion.p className={styles.block__info} variants={fadeIn}>
            Telegram: <span>@fcoretech</span>
          </motion.p>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Contacts;
