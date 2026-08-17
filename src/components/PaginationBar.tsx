import PaginationButton from "./PaginationButton";
import "./PaginationButton.css";
import "./PaginationBar.css";
function PaginationBar({ currentPage, totalPages, onPageChange }) {
  if (!totalPages || totalPages <= 1) return null;

  const maxVisiblePages = 10;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = [];
  for (let page = startPage; page <= endPage; page++) {
    pages.push(page);
  }

  return (
    <div className="paginationBar">
      {pages.map((page) => (
        <PaginationButton
          key={page}
          title={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        />
      ))}
    </div>
  );
}

export default PaginationBar;
