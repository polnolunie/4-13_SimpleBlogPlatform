import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./MainPage";
import ArticlePage from "./ArticlePage";
import ProfilePage from "./ProfilePage";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Main</Link>
        <Link to="/article">Articles</Link>
        <Link to="/profile">Profile</Link>
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
