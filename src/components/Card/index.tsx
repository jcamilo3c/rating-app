"use client";

import "./styles.css";

interface CardProps {
  imageUrl: string;
  author: string;
}

export default function Card({ imageUrl, author }: CardProps) {
  return (
    <article className="card">
      <img src={imageUrl} alt={author} />
      <h3 className="card__choice card__choice-title">{author}</h3>
      <div className="card__choice card__choice-nope">NOPE</div>
      <div className="card__choice card__choice-like">LIKE</div>
    </article>
  );
}
