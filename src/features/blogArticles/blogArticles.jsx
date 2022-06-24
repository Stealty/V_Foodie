import React from "react";
import styles from "./blogArticles.module.scss";
import {
  ArticleFilter,
  Articles,
  RecipeCard,
  CardStack,
  SiteBanner,
} from "@/components";

import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

const maximumNumberRecipesShown = 3;

const BlogArticles = () => {
  const [data, loading, error] = useFetch("@/../articles.json");
  const [recipes, recipesLoading, recipesFetchError] =
    useFetch("@/../data.json");
  console.log(recipes);
  const [articles, setArticles] = useState();

  useEffect(() => {
    setArticles(data);
  }, [data]);

  const handleSearch = (text) => {
    const searchValue = text.toLowerCase();
    const filteredArticles = data.filter((article) =>
      article.articleTitle.toLowerCase().includes(searchValue)
    );

    setArticles(filteredArticles);
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
          <h2 className={styles["blogArticles__recipesStack__title"]}>
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
        <div className={styles["blogArticles__pageSelector"]}>
          Page Selector
        </div>
      </div>
    </>
  );
};

export default BlogArticles;
