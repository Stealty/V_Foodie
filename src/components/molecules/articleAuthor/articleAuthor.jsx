import styles from "./articleAuthor.module.scss";

const ArticleAuthor = (props) => {
  return (
    <div className={props.className}>
      <img src={props.authorImg} className={styles.authorImg} />
      <p className={styles.authorName}>{props.articleAuthor}</p>
    </div>
  );
};

export default ArticleAuthor;
