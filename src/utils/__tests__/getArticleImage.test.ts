import { getArticleImage } from '../getArticleImage';
import { Article } from '../../types/Article';

describe('getArticleImage', () => {
    it('should return image URL if available', () => {
        const mockArticle = {
            media: [
                {
                    'media-metadata': [
                        { url: 'thumb.jpg' },
                        { url: 'medium.jpg' },
                        { url: 'large.jpg' },
                    ],
                },
            ],
        } as Article;

        const url = getArticleImage(mockArticle);
        expect(url).toBe('large.jpg');
    });

    it('should return placeholder if image is missing', () => {
        const mockArticle = {} as Article;
        const url = getArticleImage(mockArticle);
        expect(url).toMatch(/no.?image/i);
    });
});