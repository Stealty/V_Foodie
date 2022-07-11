import React, { useState, useEffect } from "react";
import { Card } from "@molecules";
import { useData } from "@context/useDataContext";
import { usePages } from "@hooks/usePages";
import { Navigation } from "@molecules"
import styles from "./recipes.module.scss";

const Recipes = () => {
    const { data, loading } = useData();
    const [page, setPage] = useState("1");
    const [pageNumbers, pageContent] = usePages(4);
    const [isScreenSmall, setIsScreenSmall] = useState(false);

    useEffect(() => {
        //check if screen is small
        const checkSize = () => {
          if (window.innerWidth < 1024) {
            setIsScreenSmall(false);
          } else {
            setIsScreenSmall(true);
          }
        };
        checkSize();
        window.addEventListener("resize", checkSize);
        return () => {
          window.removeEventListener("resize", checkSize);
        };
      }, []);

    const OnClickHandler = (Item) => {
        setPage(Item.target.innerHTML);
    }

    return <>
        <div className={styles.Container}>
            <h1 className={styles.Container__Title}>Try this delicious recipe to make your day</h1>
            <p className={styles.Container__Description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam tempora voluptas optio consectetur quia debitis odio, cupiditate nostrum eligendi similique excepturi asperiores cum repellat officia odit eveniet, ratione alias libero.</p>
        </div>
        <ul className={!isScreenSmall ? styles.Recipes__ListMobile : styles.Recipes__ListDesktop}>
            {!loading && !isScreenSmall ? pageNumbers.map((pageNumber) => 
             page == pageNumber && pageContent[pageNumber-1].map((Item) => <Card card={Item} key={Item.id} />)) : data.map((card) => <Card card={card} key={card.id} />)}
        </ul>
        <div className={styles.Navigation}>
            <Navigation list={pageNumbers} onClick={OnClickHandler} />
        </div>
    </>
}

export default Recipes;