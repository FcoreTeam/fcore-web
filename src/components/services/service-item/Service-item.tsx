"use client";
import { ServiceType } from "@/types/types";
import { useRouter } from "next/navigation";
import styles from "./service-item.module.scss";
import Button from "@/components/@ui/Button/Button";

const ServiceItem = ({ title, description, time, priceStart }: ServiceType) => {
  const router = useRouter();

  const formatWithDots = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className={styles.service__item}>
      <div>
        <h2 className={styles.service__title}>{title}</h2>
        <p
          className={styles.service__description}
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>

      <div className={styles.services__wrap}>
        <div className={styles.service__info}>
          <p className={styles.service__price}>
            Цена: от <span>{formatWithDots(priceStart)}</span> ₽
          </p>
          <p className={styles.service__time}>{time}</p>
        </div>
        <Button
          text="Заказать"
          onClick={() => router.push("/brief")}
          className={styles.order__btn}
        />
      </div>
    </div>
  );
};

export default ServiceItem;
