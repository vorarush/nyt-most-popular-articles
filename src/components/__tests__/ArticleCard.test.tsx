import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleCard from '../articlecard/ArticleCard';
import { BrowserRouter } from 'react-router-dom';
import { Article } from '../../types/Article';

const mockArticle: Article = {
  id: 1,
  title: 'Sample Title',
  abstract: 'This is the abstract.',
  byline: 'By John Doe',
  published_date: '2024-04-17',
  url: 'https://nytimes.com/sample',
  media: [],
};

const renderCard = () =>
  render(
    <BrowserRouter>
      <ArticleCard article={mockArticle} />
    </BrowserRouter>
  );

describe('ArticleCard', () => {
  it('renders article content', () => {
    renderCard();

    expect(screen.getByText(/sample title/i)).toBeInTheDocument();
    expect(screen.getByText(/by john doe/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument();
  });
});
