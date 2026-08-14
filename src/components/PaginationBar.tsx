import PaginationButton from "./PaginationButton";
import "./PaginationButton.css";
import "./PaginationBar.css";

function PaginationBar () {
 const pages = [1,2,3,4,5,6,7];
return (
    <div className="paginationBar">
    {pages.map(page => (
        <PaginationButton title={page} key={page}/>
      ))}
      </div>
);
}

export default PaginationBar;