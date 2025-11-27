import { useStartWeb } from "@/hooks/useStartWeb";
import clsx from "clsx";
import Link from "next/link";
import styles from "./project.module.scss";
import Button from "../@ui/Button/Button";

const Project = () => {
  const { theme } = useStartWeb();
  return (
    <div
      className={clsx(
        styles.project,
        theme === "light" ? styles.background : styles.background__dark
      )}
    >
      <h1>
        Два пути <span>к успеху</span>
      </h1>
      <div className={styles.project__wrap}>
        <div className={styles.project__type}>
          <div className={styles.project__info}>
            <p className={styles.project__title}>Пройти опрос</p>
            <p className={styles.project__description}>
              Подойдет, если у вас нету технического задания, но есть хорошая
              задумка. После опроса вы получите:
              <br />
              <br />- Примерный срок выполнения работы <br />- Ориентировочную
              стоимость проекта
              <br /> - Рекомендации по дальнейшим действиям
            </p>
          </div>

          <Button text="Пока недоступно" className={styles.go__btn} />
        </div>
        <p className={styles.project__element}>VS</p>
        <div className={styles.project__type}>
          <div className={styles.project__info}>
            <p className={styles.project__title}>Заполнить бриф</p>
            <p className={styles.project__description}>
              Есть техническое задание? Уже определились с проектом? Отлично!
              Можете смело заполнить бриф, а мы подберем хорошее решение для
              вас. После заполнения вы получите:
              <br />
              <br />- Обратную связь на указанные контакты <br />- Условия
              выполнения заказа
              <br /> - Хорошее настроение от продуктивного диалога :)
            </p>
          </div>
          <Link href="/brief">
            <Button text="Пройти" className={styles.go__btn} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
