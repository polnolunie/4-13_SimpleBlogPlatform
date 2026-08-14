import "./PaginationButton.css";

function PaginationButton ({title}) {
    return (
<button className="paginationButton">
    {title}
    </button>
    );
}

export default PaginationButton;