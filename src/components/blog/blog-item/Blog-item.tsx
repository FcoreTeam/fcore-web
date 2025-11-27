import Image from "next/image";
import { News } from "../news";
import { useRouter } from "next/navigation";
import styles from "./blog-item.module.scss";
import useWindowWidth from "@/hooks/useWindowWidth";

const BlogItem = ({
  title,
  preview,
  id,
  description,
  writer_avatar,
  description_mobile,
  writer,
  href,
}: News) => {
  const router = useRouter();
  const openCurrent = (id: number) => {
    router.push(href);
  };
  const windowWidth = useWindowWidth();
  return (
    <div className={styles.blog__item} onClick={() => openCurrent(id)}>
      <div className={styles.blog__header}>
        <Image
          src={preview}
          alt=""
          width={640}
          height={320}
          className={styles.blog__image}
        />
        <div className={styles.blog__blur}></div>
        <p className={styles.blog__title}>{title}</p>
      </div>
      <div className={styles.blog__writer}>
        <Image
          src={writer_avatar}
          alt=""
          width={100}
          height={100}
          className={styles.writer__avatar}
        />
        <p className={styles.writer__name}>{writer}</p>
      </div>
      <p className={styles.blog__description}>
        {windowWidth < 792 ? description_mobile : description}
      </p>
    </div>
  );
};
export default BlogItem;
