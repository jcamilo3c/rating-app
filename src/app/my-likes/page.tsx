"use client";

import styles from "@/styles/layout.module.css";
import likedStyles from "@/styles/my-likes.module.css";
import { type ImageDetail } from "@/types";
import { useEffect, useState } from "react";

export default function MyLikes() {
  const [likedCards, setLikedCards] = useState<ImageDetail[]>([]);
  const [clear, setClear] = useState<boolean>(false);

  useEffect(() => {
    const likedPics = sessionStorage.getItem("liked-pics") || "";
    if (likedPics) setLikedCards(JSON.parse(likedPics));
  }, []);

  useEffect(() => {
    if (clear) {
      sessionStorage.clear();
      document.location.reload();
    }
  }, [clear]);

  return (
    <section className={`${styles.section} ${likedStyles.container}`}>
      <h2>My Likes</h2>
      <div className={likedStyles.imagesContainer}>
        {!likedCards.length && <p>No liked pics yet 🤪</p>}
        {likedCards.length ? (
          <button
            className={likedStyles.clearBtn}
            disabled={!likedCards.length}
            onClick={() => setClear(true)}
          >
            Clear
          </button>
        ) : null}
        {likedCards.map((card: ImageDetail) => (
          <article className={likedStyles.article} key={card.id}>
            <h3 className={likedStyles.imgTitle}>{card.author}</h3>
            <img
              className={likedStyles.image}
              src={card.download_url}
              alt={card.author}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
