import Input from "./components/input";
import PaginationBar from "./components/PaginationBar";
import PaginationButton from "./components/PaginationButton";


function ArticlePage() {
  return ( <div>
    <h1>Article Page</h1>
    <p>articles are here</p>
    <Input />
    <Input disabled/>
    <PaginationBar/>
  </div>
);
}

export default ArticlePage;
