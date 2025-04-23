import { useEffect, useState } from "react";
import { fetchMostPopularArticles } from "../api/nyt";
import { Article } from "../types/Article";

export const useArticles = (days: 1 | 7 | 30 = 1) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getArticles = async () => {
            try {
                setLoading(true);
                const data = await fetchMostPopularArticles(days);
                setArticles(data);
            } catch {
                setError('failed to fetch articles');
            } finally {
                setLoading(false);
            }
        }
        getArticles();
    }, [days])

    return { articles, loading, error };

}