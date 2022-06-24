import React from "react";
import styles from "./blogArticles.module.scss";
import { ArticleFilter, Articles } from "@/components";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

const BlogArticles = () => {
  const [data, loading, error] = useFetch("@/../articles.json");

  const [articles, setArticles] = useState();

  useEffect(() => {
    setArticles(data);
  }, [data]);

  const handleSearch = (text) => {
    const searchValue = text.toLowerCase();
    const filter = data.filter((article) =>
      article.articleTitle.toLowerCase().includes(searchValue)
    );

    setArticles(filter);
  };

  return (
    <>
      <h1 className={styles["blogArticles__title"]}>Blog {`&`} Article</h1>
      <p className={styles["blogArticles__subtitle"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
      <div className={styles["blogArticles__wrapper"]}>
        <div className={styles["blogArticles__searchBar"]}>
          <ArticleFilter handleSearch={handleSearch} />
        </div>
        <div className={styles["blogArticles__articlesStack"]}>
          <Articles articles={articles} loading={loading} />
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
