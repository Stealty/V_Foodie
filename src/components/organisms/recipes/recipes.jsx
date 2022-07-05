import React from "react";
import Card from "../Carousel/Card";
import  useFetch from "@hooks/useFetch";
import styles from "./recipes.module.scss";

const Recipes = () => {
    const [data, loading, error] = useFetch("@/../data.json");

    return <>
    <div className={styles.Container}>
    <h1 className={styles.Container__Title}>Try this delicious recipe to make your day</h1>
    <p className={styles.Container__Description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam tempora voluptas optio consectetur quia debitis odio, cupiditate nostrum eligendi similique excepturi asperiores cum repellat officia odit eveniet, ratione alias libero.</p>
    </div>
    <div className={styles.Recipes}>
        <ul className={styles.Recipes__ListDesktop}>
        {!loading && data.map((card) => <Card card={card} key={card.id} />)}
        </ul>
        <ul className={styles.Recipes__ListMobile}>
        {!loading && data.map((card) => <Card card={card} key={card.id} />)}
        </ul>
    </div>
    </>
}

export default Recipes;