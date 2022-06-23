import { ArticleItem } from "@/components";
import styles from "./articles.module.scss";

const Articles = () => {
  const articles = [
    {
      id: 1,
      articleImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOU8KqNFnoM3XOAT0bR66229KlXDTzeIPSw&usqp=CAU",
      articleTitle: "Crochet Projects for Noodle Lovers",
      articleText:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
      articleAuthor: "Wade Warren",
      authorImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTfj4rpfo35KCLe8P_QUcy_EThBOWFRo42w&usqp=CAU",
      articleDate: "12 November 2021",
    },
    {
      id: 1,
      articleImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOU8KqNFnoM3XOAT0bR66229KlXDTzeIPSw&usqp=CAU",
      articleTitle: "Crochet Projects for Noodle Lovers",
      articleText:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
      articleAuthor: "Wade Warren",
      authorImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTfj4rpfo35KCLe8P_QUcy_EThBOWFRo42w&usqp=CAU",
      articleDate: "12 November 2021",
    },
    {
      id: 1,
      articleImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOU8KqNFnoM3XOAT0bR66229KlXDTzeIPSw&usqp=CAU",
      articleTitle: "Crochet Projects for Noodle Lovers",
      articleText:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
      articleAuthor: "Wade Warren",
      authorImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHTfj4rpfo35KCLe8P_QUcy_EThBOWFRo42w&usqp=CAU",
      articleDate: "12 November 2021",
    },
  ];
  return (
    <div className={styles.articlesContainer}>
      {articles.map((article) => (
        <ArticleItem key={article.id} data={article} />
      ))}
    </div>
  );
};

export default Articles;
