import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ArticlePage from "./pages/ArticlePage";
import ErrorGlobal from "./error/Error";
import NavbarFrame from "./components/NavbarFrame";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavbarFrame />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/articles" element={<MainPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<ErrorGlobal />} />
      </Routes>
    </div>
  );
}

export default App;
