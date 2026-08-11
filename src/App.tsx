import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <Router>
    <div>
    <nav className="App">
        <Link to="/">HomePage</Link>
        <Link to="/ArticlePage">ArticlePage</Link>
    </nav>
    <Outlet/>
    </div>
    </Router>
  );
}

export default App;
