import React from "react";
import style from "./recipeCard.module.scss";

const RecipeCard = ({ author, image, title }) => {
  return (
    <a className={style["recipeCard"]}>
      <div className={style["recipeCard__imageWrapper"]}>
        <img src={image} className={style["recipeCard__image"]} />
      </div>
      <div className={style["recipeCard__body"]}>
        <h3 className={style["recipeCard__body__title"]}>{title}</h3>
        <p className={style["recipeCard__body__author"]}>By {author}</p>
      </div>
    </a>
  );
};

export default RecipeCard;
