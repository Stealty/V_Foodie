import ArticleAuthor from "./articleAuthor/articleAuthor";
import styles from "./articleItem.module.scss";

const ArticleItem = () => {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOU8KqNFnoM3XOAT0bR66229KlXDTzeIPSw&usqp=CAU" />
      <h2>Crochet Projects for Noodle Lovers</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim{" "}
      </p>
      <ArticleAuthor />
      {/* <Divider /> */}
      <p>12 November 2021</p>
    </div>
  );
};

export default ArticleItem;
