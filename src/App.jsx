import { Routes, Route } from "react-router-dom";
import { useForm } from "react-hook-form";
import MainPage from "./pages/MainPage";
import ArticlePage from "./pages/ArticlePage";
import ErrorGlobal from "./error/Error";
import Navigation from "./components/NavbarFrame";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Navigation />

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
