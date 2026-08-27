import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ArticlePage from "./pages/ArticlePage";
import ErrorGlobal from "./error/Error";
import NavbarFrame from "./components/NavbarFrame";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NewPost from "./pages/WriteArticle";
import Settings from "./pages/Settings";
import ProfilePage from "./pages/ProfilePage";
import WriteArticle from "./pages/WriteArticle";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavbarFrame />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/articles" element={<MainPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route
  path="/newpost"
  element={
    <PrivateRoute>
      <WriteArticle />
    </PrivateRoute>
  }
/>
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
  path="/articles/:slug/edit"
  element={
    <PrivateRoute>
      <WriteArticle />
    </PrivateRoute>
  }
/>

        <Route path="*" element={<ErrorGlobal />} />
      </Routes>
    </div>
  );
}

export default App;
