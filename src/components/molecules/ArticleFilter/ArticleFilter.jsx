import styles from "./ArticleFilter.module.scss";
import { SubmitButton } from "@atoms";

export default function ArticleFilter(props) {
  return (
    <div className={styles.article__filter}>
      <form
        action=""
        className={styles.article__form}
        onSubmit={(event) => {
          event.preventDefault();
          props.handleSearch(event.target.search.value.trim());
        }}
      >
        <input
          type="text"
          name="search"
          className={styles.article__input}
          placeholder="Search article, news or recipe..."
          onChange={(e) => props.handleSearch(e.target.value.trim())}
        />
        <button type="submit" className={styles["article__button--mobile"]}>
          <img
            src="images/searchIcon.svg"
            alt=""
            className={styles.article__buttonImage}
          />
        </button>
        <div className={styles["article__button--desktop"]}>
          <SubmitButton text="Search" type="submit" />
        </div>
      </form>
    </div>
  );
}
