import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./MainPage";
import ArticlePage from "./ArticlePage";
import ProfilePage from "./ProfilePage";
import WriteArticle from "./pages/WriteArticle";
import PageButton from "./components/buttons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <PageButton to="/" label="Main" />
        <PageButton to="/article" label="Article" />
        <PageButton to="/profile" label="Profile" />
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
