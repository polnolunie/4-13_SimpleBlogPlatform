import MainPage from "./pages/MainPage";
import ArticlePage from "./pages/ArticlePage";
import ProfilePage from "./pages/ProfilePage";
import UserInfo from "./components/UserInfo";
import PageButton from "./components/buttons";
import ErrorGlobal from "./error/Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <PageButton to="/" label="Main" />
        <PageButton to="/article" label="Article" />
        <PageButton to="/profile" label="Profile" />
        <PageButton to="/userinfo" label="UserInfo" />
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="*" element={<ErrorGlobal />} />
      </Routes>
    </div>
  );
}

export default App;
