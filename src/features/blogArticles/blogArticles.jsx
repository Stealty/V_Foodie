import React from "react";
import styles from "./blogArticles.module.scss";
import { ArticleFilter } from "@/components";

const BlogArticles = () => {
  return (
    <>
      <h1 className={styles["blogArticles__title"]}>Blog {`&`} Article</h1>
      <p className={styles["blogArticles__subtitle"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
      <div className={styles["blogArticles__wrapper"]}>
        <div className={styles["blogArticles__searchBar"]}>
          <ArticleFilter />
        </div>
        <div className={styles["blogArticles__articlesStack"]}>
          Article Stack
        </div>
        <div className={styles["blogArticles__recipesStack"]}>
          Recipes Stack
        </div>
        <div className={styles["blogArticles__ads"]}>Ads</div>
        <div className={styles["blogArticles__pageSelector"]}>
          Page Selector
        </div>
      </div>
    </>
  );
};

export default BlogArticles;
