import React, { useState, useEffect, useMemo } from "react";
import { Card, Navigation } from "@molecules";
import { Title, Description } from "@atoms";
import { useData } from "@context/useDataContext";
import { usePages } from "@hooks/usePages";
import styles from "./recipes.module.scss";

const Recipes = () => {
    const { data, loading } = useData();
    const [page, setPage] = useState("1");
    const [pageNumbers, pageContent] = usePages(4);
    const [isScreenSmall, setIsScreenSmall] = useState(false);

    if(localStorage.getItem('Page') != null){
      useMemo(() => setPage(localStorage.getItem('Page')), [localStorage.getItem('Page')]);
    }

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
        localStorage.setItem('Page', Item.target.innerHTML);
        setPage(Item.target.innerHTML);
        console.log(localStorage.getItem("Page"));
    }

    return <>
        <div className={styles.Container}>
            <Title>Try this delicious recipe to make your day</Title>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae at aut velit labore ipsum expedita!.</Description>
        </div>
        <ul className={!isScreenSmall ? styles.Recipes__ListMobile : styles.Recipes__ListDesktop}>
            {!loading && !isScreenSmall ? pageNumbers.map((pageNumber) => 
             localStorage.getItem('Page') == pageNumber && pageContent[pageNumber-1].map((Item) => <Card card={Item} key={Item.id} />)) : !loading && data.map((card) => <Card card={card} key={card.id} />)}
        </ul>
        <div className={styles.Navigation}>
            <Navigation list={pageNumbers} onClick={OnClickHandler} />
        </div>
    </>
}

export default Recipes;