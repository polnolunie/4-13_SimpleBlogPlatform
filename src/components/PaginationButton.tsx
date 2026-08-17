import "./PaginationButton.css";

function PaginationButton({ title, onClick, active }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={active ? "paginationButton active" : "paginationButton"}
    >
      {title}
    </button>
  );
}

export default PaginationButton;
