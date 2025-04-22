import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import ArticleListPage from '../articlelistpage/ArticleListPage';
import * as api from '../../api/nyt';
import { BrowserRouter } from 'react-router-dom';
import { Article } from '../../types/Article';

const mockArticles: Article[] = [
  {
    id: 1,
    title: 'Test Article',
    abstract: 'Sample abstract',
    byline: 'By Sample Author',
    published_date: '2024-04-17',
    url: 'https://nytimes.com/article1',
    media: [],
  },
];

jest.spyOn(api, 'fetchMostPopularArticles').mockResolvedValue(mockArticles);

const renderPage = () =>
  render(
    <BrowserRouter>
      <ArticleListPage />
    </BrowserRouter>
  );

describe('ArticleListPage', () => {
  it('renders loading state initially', () => {
    renderPage();
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders articles after loading', async () => {
    renderPage();

    // Wait until article is rendered
    await waitFor(() => {
      expect(screen.getByText(/test article/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/by sample author/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument();
  });

  it('updates articles when time range changes', async () => {
    renderPage();

    // Wait for article to appear
    await screen.findByText(/test article/i);

    const dropdown = screen.getByRole('combobox');
    fireEvent.change(dropdown, { target: { value: '7' } });

    expect(dropdown).toHaveValue('7');
  });
});
