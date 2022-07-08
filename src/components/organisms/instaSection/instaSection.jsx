import { useEffect, useState } from "react";
import InstaCard from "../../molecules/instaCard/instaCard";
import styles from "./instaSection.module.scss";

const InstaSection = () => {
  const [postsList, setPostsList] = useState([]);

  const getInstaPosts = async () => {
    const token = import.meta.env.VITE_TOKEN_INSTA;
    const fields =
      "caption,id,media_type,media_url,permalink,thumbnail_url,username,timestamp";
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

    try {
      const req = await fetch(url);
      const { data } = await req.json();
      setPostsList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPostChildren = async () => {
    const token = import.meta.env.VITE_TOKEN_INSTA;
    const fields =
      "caption,id,media_type,media_url,permalink,thumbnail_url,username,timestamp";
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

    try {
      const req = await fetch(url);
      const { data } = await req.json();
      setPostsList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInstaPosts();
  }, []);

  return (
    <section>
      <div className="instaCardsContainer">
        {postsList.map((item) => (
          <InstaCard key={item.id} postInfo={item} />
        ))}
      </div>

      {/*  {console.log(postsList)} */}
    </section>
  );
};

export default InstaSection;
