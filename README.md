# NY Times Most Popular Articles

A React + TypeScript web application that displays the most popular articles from the New York Times using their [Most Popular API](https://developer.nytimes.com/docs/most-popular-product/1/overview). 
Built with a custom Webpack setup from scratch.

[View on GitHub](https://github.com/vorarush/nyt-most-popular-articles)

---

## 🔧 Features

- Fetches most popular articles from the past 1, 7, or 30 days
- Built with React 18, TypeScript, Webpack, Babel, and SCSS
- Clean architecture with custom hooks and reusable components
- Uses React Router v6 for master/detail views
- Unit tests with Jest + React Testing Library (with coverage)
- ESLint + Prettier for static analysis and code formatting
- `.env` handling with `dotenv-webpack`
- Custom Webpack production-ready build

---

## 📂 Folder Structure

src/
│
├── api/                # Axios wrapper for NYT API
├── components/         # Reusable presentational components (e.g. ArticleCard)
├── containers/         # Page-level components (list + detail)
├── hooks/              # Custom hooks (e.g. useArticles)
├── styles/             # SCSS styles (global + modular)
├── types/              # TypeScript type definitions
├── utils/              # Helper utilities (e.g. getArticleImage)
├── App.tsx             # Root app with routing
└── index.tsx           # App entry point


#### 1. Clone the Repository

git clone https://github.com/vorarush/nyt-most-popular-articles.git
cd nyt-most-popular-articles


#### 2. Install Dependencies
npm install

#### 3. Add Environment Variables
Create a .env file in the root:

REACT_APP_NYT_API_KEY=your-nyt-api-key-here

Get your API key from https://developer.nytimes.com/get-started

#### 4. Run the App Locally
npm start

Visit http://localhost:3000 on browser once your app is running


### Testing & Coverage
#### Run all tests:
npm test

#### Generate code coverage report:
npm run test:coverage
Open coverage/lcov-report/index.html to view coverage summary.


### Static Code Analysis

#### Lint the code:
npm run lint

#### Auto-fix lint errors:
npm run lint:fix


### Build for Production
npm run build
Build output will be in the dist/ directory
