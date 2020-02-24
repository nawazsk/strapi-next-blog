import React from "react";  
import Link from "next/link";

const Card = ({ article }) => {  
  
  return (
    // <Link href={{ pathname: "article", query: { id: article.id } }}>
    // <Link href="/[article]" as={`/${article.slug}`}>
    <Link href={{pathname: "/article/[article]", query:{id: article.id, slug: article.slug}}} as={`/article/${article.slug}-${article.id}`}>
      <a className="uk-link-reset" id={article.id}>
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <img
              src={process.env.API_URL + article.image.url}
              alt={article.image.url}
              height="100"
            />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;