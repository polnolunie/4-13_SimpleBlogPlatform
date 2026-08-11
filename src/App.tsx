import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/article">Articles</Link>
        <Link to="/contact">Contacts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/article" element={<ArticlePage />}/>
          <Route path="/contact" element={<ContactPage />}/>
        </Routes>
    </div>
  );
}

export default App;
