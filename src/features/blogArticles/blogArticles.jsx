import React from "react";
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
  const [articles, setArticles] = useState();

  useEffect(() => {
    setArticles(data.slice(0, maximumNumberArticlesShown));
  }, [data]);

  const handleSearch = (text) => {
    const searchValue = text.toLowerCase();
    const filteredArticles = data.filter((article) =>
      article.articleTitle.toLowerCase().includes(searchValue)
    );

    setArticles(filteredArticles.slice(0, maximumNumberArticlesShown));
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
