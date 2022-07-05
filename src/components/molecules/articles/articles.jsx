import { ArticleItem } from "@molecules";
import styles from "./articles.module.scss";

const Articles = (props) => {
  const { articles, loading } = props;

  if (loading) {
    return (
      <div className={styles.articlesContainer}>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (articles == "") {
    return (
      <div className={styles.articlesContainer}>
        <h2>No articles found</h2>
      </div>
    );
  }
  if (articles) {
    return (
      <div className={styles.articlesContainer}>
        {articles.map((article) => (
          <ArticleItem key={article.id} data={article} />
        ))}
      </div>
    );
  }
};

export default Articles;
