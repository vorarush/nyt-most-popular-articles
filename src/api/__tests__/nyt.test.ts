import axios from 'axios';
import { fetchMostPopularArticles } from '../nyt';
import { Article } from '../../types/Article';

// Mock the entire axios module
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchMostPopularArticles', () => {
  beforeEach(() => {
    jest.resetAllMocks(); // clean slate for each test
  });

  it('fetches most popular articles successfully', async () => {
    const mockArticles: Article[] = [
      {
        id: 1,
        title: 'Mock Article',
        abstract: 'Mock abstract',
        byline: 'By Author',
        published_date: '2024-04-17',
        url: 'https://example.com',
        media: [],
      },
    ];

    // ✅ Mock axios.get to return this data
    mockedAxios.get.mockResolvedValueOnce({
      data: { results: mockArticles },
    });

    const result = await fetchMostPopularArticles(1);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      expect.stringContaining('viewed/1.json?api-key=') // you can fine-tune this match if needed
    );
    expect(result).toEqual(mockArticles);
  });

  it('throws an error when API call fails', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Request failed'));

    await expect(fetchMostPopularArticles(1)).rejects.toThrow('Failed to fetch articles');
  });
});