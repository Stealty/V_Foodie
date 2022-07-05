import React from "react";
import { Card } from "@/components";
import { useData } from "../../context/useDataContext";
import styles from "./recipes.module.scss";

const Recipes = () => {
    const {data, loading} = useData();
    const DUMMY_RECIPES = [
        {
          "id": 5,
          "image": "/images/rainbow-chicken.png",
          "title": "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
          "time": "30 Minutes",
          "type": "Healthy",
          "author": "Jane Wilson"
        },
        {
          "id": 6,
          "image": "/images/sandwich.png",
          "title": "Barbeque Spicy Sandwiches with Chips ",
          "time": "30 Minutes",
          "type": "Snack",
          "author": "Oscar Lame"
        },
        {
          "id": 7,
          "image": "/images/lettuce-wraps.png",
          "title": "Firecracker Vegan Lettuce Wraps - Spicy! ",
          "time": "30 Minutes",
          "type": "Seafood",
          "author": "Gil Bert"
        },
        {
          "id": 8,
          "image": "/images/chicken-ramen.png",
          "title": "Chicken Ramen Soup with Mushroom",
          "time": "30 Minutes",
          "type": "Japanese",
          "author": "Pedro Cal"
        }
      ]


    return <>
    <div className={styles.Container}>
    <h1 className={styles.Container__Title}>Try this delicious recipe to make your day</h1>
    <p className={styles.Container__Description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam tempora voluptas optio consectetur quia debitis odio, cupiditate nostrum eligendi similique excepturi asperiores cum repellat officia odit eveniet, ratione alias libero.</p>
    </div>
    <div className={styles.Recipes}>
        <ul className={styles.Recipes__List}>
        {!loading && data.map((card) => <Card card={card} key={card.id} />)}
        {DUMMY_RECIPES.map((card) => <Card card={card} key={card.id} />)}
        </ul>
    </div>
    </>
}

export default Recipes;