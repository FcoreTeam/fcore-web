import { useStartWeb } from "@/hooks/useStartWeb";
import clsx from "clsx";

import styles from "./serivices.module.scss";
import { servicesList } from "./services-list";
import ServiceItem from "./service-item/Service-item";

const Services = () => {
  const { theme } = useStartWeb();
  return (
    <div
      className={clsx(
        styles.services,
        theme === "light" ? styles.background : styles.background__dark
      )}
    >
      <p className={styles.services__map}>
        {">"} Главная / <span>Наши услуги</span>
      </p>
      <h1 className={styles.services__title}>
        {" "}
        #Услуги - <span>для вас</span>
      </h1>
      <section className={styles.services__section}>
        {servicesList.map((item, index) => (
          <ServiceItem key={index} {...item} />
        ))}
      </section>
    </div>
  );
};
export default Services;
