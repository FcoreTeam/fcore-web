import { useStartWeb } from "@/hooks/useStartWeb";
import clsx from "clsx";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { theme } = useStartWeb();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__element}>Работаем на результат</div>
      <div className={clsx(styles.footer__element, styles.second)}>
        Быстро. Качественно. <span>В срок</span>
      </div>

      <div className={styles.footer__brend}>
        <Image
          src={theme === "light" ? "/fcore_dark.svg" : "/Fcore.svg"}
          alt=""
          width={1000}
          height={500}
          className={styles.footer__logo}
        />
        <p className={styles.footer__name}>ИП Филиппов Михаил Сергеевич </p>
      </div>
      <div className={styles.footer__info}>
        <Link href="/contacts" className={styles.link}>
          Контакты
        </Link>
        <Link href="/contacts" className={styles.link}>
          Пользовательское соглашение
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
