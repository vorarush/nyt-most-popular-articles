import axios from "axios";
import { Article } from "../types/Article";

const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed';

const apiKey = process.env.REACT_APP_NYT_API_KEY;

export const fetchMostPopularArticles = async (days: 1 | 7 | 30 = 1): Promise<Article[]> => {
    try {
      const response = await axios.get(
        `${BASE_URL}/${days}.json?api-key=${apiKey}`
      );
      return response.data.results;
    } catch (error) {
      throw new Error('Failed to fetch articles');
    }
};