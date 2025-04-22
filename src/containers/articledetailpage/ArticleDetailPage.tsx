// src/containers/ArticleDetailPage.tsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getArticleImage } from '../../utils/getArticleImage';
import './ArticleDetailPage.scss';
import { Article } from '../../types/Article';

const ArticleDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = (location.state as { article: Article })?.article;

  if (!article) {
    return (
      <div style={{ padding: '2rem' }}>
        <p>Article not found or missing data.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1>{article.title}</h1>
      <img src={getArticleImage(article)} alt={article.title} />
      <p>{article.abstract}</p>
      <p><strong>Author:</strong> {article.byline}</p>
      <p><strong>Published:</strong> {article.published_date}</p>
      <a href={article.url} target="_blank" rel="noreferrer">
        Read full article on NYTimes.com →
      </a>
    </div>
  );
};

export default ArticleDetailPage;