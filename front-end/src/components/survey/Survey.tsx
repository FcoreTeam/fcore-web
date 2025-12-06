import { useStartWeb } from "@/hooks/useStartWeb";
import clsx from "clsx";
import styles from "./survey.module.scss";

const Survey = () => {
  const { theme } = useStartWeb();
  return (
    <div
      className={clsx(
        styles.survey,
        theme === "light" ? styles.background : styles.background__dark
      )}
    >
      <h1>Бриф-опрос</h1>
      <section className={styles.survey__body}></section>
    </div>
  );
};
export default Survey;
