import styles from "./ArticleFilter.module.scss";
import SubmitButton from "../submitButton/submitButton";

export default function ArticleFilter() {
  function searchArticles(event) {
    event.preventDefault();
    console.log("searching articles");
  }
  return (
    <div className={styles.article__filter}>
      <form
        action=""
        className={styles.article__form}
        onSubmit={searchArticles}
      >
        <input
          type="text"
          className={styles.article__input}
          placeholder="Search article, news or recipe..."
        />
        <button type="submit" className={styles.article__button}>
          <img
            src="images/searchIcon.svg"
            alt=""
            className={styles.article__buttonImage}
          />
        </button>
      </form>
    </div>
  );
}
