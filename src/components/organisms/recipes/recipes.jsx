import React, { useState } from "react";
import Card from "../Carousel/Card";
import { useData } from "@context/useDataContext";
import { Navigation } from "@molecules"
import styles from "./recipes.module.scss";

const Recipes = () => {
    const { data, loading } = useData();
    const [page, setPage] = useState("1");

    const setpageNumbers = () => {
        if (!loading) {
            const pages = data.slice(0, data.length / 4).map((Item) => Item.id);
            const pagecontent = pages.map((element) => data.slice(4*(element-1) , 4*element).map((data) => data));
            return [pages, pagecontent];
        } else {
            return [[], [{}]];
        }
    };

    const [pageNumbers, pageContent] = setpageNumbers();

    const OnClickHandler = (Item) => {
        setPage(Item.target.innerHTML);
    }

    return <>
        <div className={styles.Container}>
            <h1 className={styles.Container__Title}>Try this delicious recipe to make your day</h1>
            <p className={styles.Container__Description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam tempora voluptas optio consectetur quia debitis odio, cupiditate nostrum eligendi similique excepturi asperiores cum repellat officia odit eveniet, ratione alias libero.</p>
        </div>
        <ul className={styles.Recipes__ListDesktop}>
            {!loading && data.map((card) => <Card card={card} key={card.id} />)}
        </ul>
        <ul className={styles.Recipes__ListMobile}>
            {!loading && pageNumbers.map((pageNumber) => 
             page == pageNumber && pageContent[pageNumber-1].map((Item) => <Card card={Item} key={Item.id} /> ))}
        </ul>
        <div className={styles.Navigation}>
            <Navigation list={pageNumbers} onClick={OnClickHandler} />
        </div>
    </>
}

export default Recipes;