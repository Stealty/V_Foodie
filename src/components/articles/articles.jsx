import { ArticleItem } from "@/components";
import styles from "./articles.module.scss";

const Articles = (props) => {
  const { data, filteredData, loading } = props;

  const articles = data;
  const fiteredArticles = filteredData;

  if (loading) {
    return (
      <div className={styles.articlesContainer}>
        <h2>Loading...</h2>
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
