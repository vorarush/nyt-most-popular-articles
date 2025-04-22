import { Article } from "../types/Article";

export const getArticleImage = (article: Article): string => {
  return (
    article.media?.[0]?.['media-metadata']?.[2]?.url ||
    'https://placehold.co/210x140?text=No+Image'
  );
};