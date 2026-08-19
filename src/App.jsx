import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ArticlePage from "./pages/ArticlePage";
import ProfilePage from "./pages/ProfilePage";
import UserInfo from "./components/UserInfo";
import PageButton from "./components/buttons";
import ErrorGlobal from "./error/Error";
import ArticleFromPage from "./pages/ArticleFromPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <PageButton to="/" label="Main" />
        <PageButton to="/article" label="Article" />
        <PageButton to="/profile" label="Profile" />
        <PageButton to="/userinfo" label="UserInfo" />
        <PageButton to="/signin" label="Signin" />
        <PageButton to="/signup" label="Signup" />
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/articles/:slug" element={<ArticleFromPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorGlobal />} />
      </Routes>
    </div>
  );
}

export default App;
