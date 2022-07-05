import { ArticleAuthor } from "@molecules";
import styles from "./articleItem.module.scss";

const ArticleItem = (props) => {
  return (
    <div className={styles.articleItemContainer}>
      <img src={props.data.articleImg} className={styles.articleImg} />
      <h2 className={styles.articleTitle}>{props.data.articleTitle}</h2>
      <p className={styles.articleText}>{props.data.articleText} </p>
      <ArticleAuthor
        className={styles.articleAuthor}
        authorImg={props.data.authorImg}
        articleAuthor={props.data.articleAuthor}
      />
      {/* <Divider /> */}
      <p className={styles.articleDate}>{props.data.articleDate}</p>
    </div>
  );
};

export default ArticleItem;
