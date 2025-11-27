"use client";

import BlogItem from "./blog-item/Blog-item";
import styles from "./blog.module.scss";
import { news } from "./news";

const Blog = () => {
  return (
    <div className={styles.blog}>
      <p className={styles.works__map}>
        {">"} Главная / <span>блог</span>
      </p>

      <h1 className={styles.works__title}>
        #А это — <span>наш</span> блог
      </h1>
      <div className={styles.blog__body}>
        {news.map((item) => (
          <BlogItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Blog;
