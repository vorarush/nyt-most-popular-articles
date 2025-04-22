import { useState } from "react";
import ArticleCard from "../../components/articlecard/ArticleCard";
import { useArticles } from "../../hooks/useArticles";
import './ArticleListPage.scss';

export default function ArticleListPage() {

    const [selectedDays, setSelectedDays] = useState<1 | 7 | 30>(1);
    const {articles, loading, error} = useArticles(selectedDays);

    return (
        <div className="article-list-page">
            <h1>NY Times – Most Popular Articles</h1>

            <div className="filters">
                <label>Show articles from: </label>
                <select
                    value={selectedDays}
                    onChange={(e) => setSelectedDays(Number(e.target.value) as 1 | 7 | 30)}
                >
                    <option value={1}>Past 1 Day</option>
                    <option value={7}>Past 7 Days</option>
                    <option value={30}>Past 30 Days</option>
                </select>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !articles.length && <p>No articles found.</p>}

            {!loading && <div className="articles-grid">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>}
        </div>
    )
}