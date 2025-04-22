import axios from 'axios';
import { fetchMostPopularArticles } from '../../api/nyt';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchMostPopularArticles', () => {
  it('fetches most popular articles successfully', async () => {
    const mockData = {
      results: [{ id: 1, title: 'Test Article' }]
    };

    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const data = await fetchMostPopularArticles(1);
    expect(data).toEqual(mockData.results);
  });

  it('throws an error when API fails', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Request failed'));

    await expect(fetchMostPopularArticles(1)).rejects.toThrow('Failed to fetch articles');
  });
});
