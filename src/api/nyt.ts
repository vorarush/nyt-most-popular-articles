import axios from "axios";

const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed';

const apiKey = process.env.REACT_APP_NYT_API_KEY;

export const fetchMostPopularArticles = async (days : 1|7|30 = 1) => {
    const url = `${BASE_URL}/${days}.json?api-key=${apiKey}`
    const response = await axios.get(url);
    return response.data.results;
}