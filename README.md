# NY Times Most Popular Articles

A simple, production-ready React + TypeScript web application that displays the most popular articles from the New York Times using their [Most Popular API](https://developer.nytimes.com/docs/most-popular-product/1/overview). 
Built with a custom Webpack setup from scratch.

[View on GitHub](https://github.com/vorarush/nyt-most-popular-articles)

---

## 🚀 Features

- View most popular NYT articles by time range (1, 7, or 30 days)
- View article details with byline, abstract, date, and image
- Custom React hook for fetching articles
- Infinite scrolling-ready card layout
- Fully tested with Jest & Cypress
- Linted with ESLint (ESLint v9 config)

---

## Tech Stack

- React + TypeScript
- Custom Webpack config (no CRA / Vite)
- Jest + React Testing Library
- Cypress for end-to-end tests
- Axios for HTTP requests
- SCSS Modules for styling
- ESLint v9 Flat Config + Prettier

---

## 📂 Folder Structure

src/
│
├── api/                # Axios wrapper for NYT API
├── components/         # Reusable presentational components
├── containers/         # Page-level components
├── hooks/              # Custom hooks
├── styles/             # SCSS styles
├── types/              # TypeScript type definitions
├── utils/              # Helper utilities
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
#### Unit + Integration Tests:
npm test

#### Generate code coverage report:
npm run test:coverage

Open coverage/lcov-report/index.html to view coverage summary.

#### Cypress UI Tests
npm run cypress:open

Cypress tests are located in /cypress/e2e/article-list.cy.ts
They use cy.intercept() to mock the NYT API.


### Static Code Analysis

#### Lint the code:
npm run lint

#### Auto-fix lint errors:
npm run lint:fix


### Build for Production
npm run build

Build output will be in the dist/ directory


## Scripts

Command	                    Description
npm start	                Run development server
npm run build	            Build for production (if configured)
npm run test	            Run unit tests
npm run test:coverage	    Generate coverage report
npm run lint	            Run ESLint
npm run lint:fix	        Auto-fix lint issues
npm run cypress:open	    Open Cypress runner


### Sonar Cube Report

[![SonarCloud](https://sonarcloud.io/api/project_badges/measure?project=vorarush_nyt-most-popular-articles&metric=alert_status)](https://sonarcloud.io/project/overview?id=vorarush_nyt-most-popular-articles)

![Coverage](https://sonarcloud.io/api/project_badges/measure?project=vorarush_nyt-most-popular-articles&metric=coverage)
![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=vorarush_nyt-most-popular-articles&metric=code_smells)
![Maintainability](https://sonarcloud.io/api/project_badges/measure?project=vorarush_nyt-most-popular-articles&metric=sqale_rating)
