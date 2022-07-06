import React, {useState} from "react";
import Card from "../Carousel/Card";
import { useData } from "@context/useDataContext";
import { Navigation } from "@molecules"
import styles from "./recipes.module.scss";

const Recipes = () => {
    const {data, loading} = useData();
    const [page, setPage] = useState("1");

    const OnClickHandler = (Item) =>{
        setPage(Item.target.innerHTML);
    }

    return <>
        <div className={styles.Container}>
            <h1 className={styles.Container__Title}>Try this delicious recipe to make your day</h1>
            <p className={styles.Container__Description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam tempora voluptas optio consectetur quia debitis odio, cupiditate nostrum eligendi similique excepturi asperiores cum repellat officia odit eveniet, ratione alias libero.</p>
        </div>
        <ul className={[styles.Recipes__ListDesktop]}>
            {!loading && data.map((card) => <Card card={card} key={card.id} />)}
        </ul>
        <ul className={[styles.Recipes__ListMobile]}>
            {!loading && page == 1 && data.slice(0, 4).map((card) => <Card card={card} key={card.id} />)}
            {!loading && page == 2 && data.slice(4, 8).map((card) => <Card card={card} key={card.id} />)}
            <Navigation list={[1, 2]} onClick = {OnClickHandler}/>
        </ul>
    </>
}

export default Recipes;