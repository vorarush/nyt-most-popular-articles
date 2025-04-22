import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticleListPage from './containers/articlelistpage/ArticleListPage';
import ArticleDetailsPage from "./containers/articledetailpage/ArticleDetailPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ArticleListPage />} />
                <Route path="/article/:id" element={<ArticleDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;