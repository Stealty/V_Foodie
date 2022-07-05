import React, { useMemo } from "react";
import styles from "./blogArticles.module.scss";
import {
  ArticleFilter,
  Articles,
  RecipeCard,
  CardStack,
  SiteBanner,
  Navigation,
} from "@/components";

import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

const maximumNumberRecipesShown = 3;
const maximumNumberArticlesShown = 6;

const BlogArticles = () => {
  const [data, loading, error] = useFetch("@/../articles.json");
  const [recipes, recipesLoading, recipesFetchError] =
    useFetch("@/../data.json");
  const [filter, setFilter] = useState(() => () => true);

  //const articles = data?.slice(0, maximumNumberArticlesShown) || [];
  const articles = useMemo(
    () => data?.filter(filter).slice(0, maximumNumberArticlesShown) || [],
    [data, filter]
  );

  const handleSearch = (text) => {
    const searchValue = text.toLowerCase();
    setFilter(
      () => (article) =>
        article.articleTitle.toLowerCase().includes(searchValue) ||
        article.articleText.toLowerCase().includes(searchValue)
    );
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
          <h2 className={styles["blogArticles__recipesStackTitle"]}>
            Tasty Recipes
          </h2>
          <CardStack>
            {!recipesLoading &&
              recipes
                .slice(0, maximumNumberRecipesShown)
                .map((recipe) => <RecipeCard key={recipe.id} {...recipe} />)}
          </CardStack>
        </div>
        <div className={styles["blogArticles__ads"]}>
          <SiteBanner />
        </div>
        <Navigation />
      </div>
    </>
  );
};

export default BlogArticles;
