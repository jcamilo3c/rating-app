"use client";

import { ReactNode } from "react";
import "./styles.css";

interface CardProps {
  imageUrl: string;
  author: string;
  children?: ReactNode;
}

export default function Card({ imageUrl, author, children }: CardProps) {
  return (
    <article className="card">
      <img src={imageUrl} alt={author} />
      <h3 className="card__choice-title">{author}</h3>
      {children}
    </article>
  );
}
