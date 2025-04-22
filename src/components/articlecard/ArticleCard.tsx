import { Link } from "react-router-dom";
import { Article } from "../../types/Article"
import { getArticleImage } from "../../utils/getArticleImage";
import './ArticleCard.scss';

type Props = {
    article: Article;
}

const ArticleCard = ({ article }: Props) => {

    return (
        <div className="article-card">
            <img src={getArticleImage(article)} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.byline}</p>
            <p>{article.published_date}</p>
            <Link to={`/article/${article.id}`} state={{ article }} className="read-more">
                Read More
            </Link>
        </div>
    );
}

export default ArticleCard;