import { routes } from "../routes";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import styles from "./header-menu.module.scss";

interface Props {
  isOpen: boolean;
  setOpen: (state: boolean) => void;
}
const HeaderMenu = ({ isOpen, setOpen }: Props) => {
  return (
    <div className={clsx(styles.header__menu, isOpen && styles.open)}>
      <div className={styles.menu__top}>
        <div className={styles.menu__close} onClick={() => setOpen(false)}>
          <p>закрыть</p>
          <i className={styles.cross}></i>
        </div>
      </div>
      <section className={styles.menu__body}>
        {routes.map((item, index) => (
          <Link
            href={item.route}
            key={index}
            className={styles.menu__name}
            onClick={() => setOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <div className={styles.menu__social}>
          <Link href="https://vk.com/fcoreteam">
            <Image
              src="/vk.svg"
              alt=""
              width={256}
              height={256}
              className={styles.social}
            />
          </Link>

          <Link href="https://t.me/fcoreteam">
            <Image
              src="/telegram.png"
              alt=""
              width={256}
              height={256}
              className={styles.social}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};
export default HeaderMenu;
