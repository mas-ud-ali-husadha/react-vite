interface PaginationType {
  total: number;
  currentPage: number;
}

const Pagination = ({ total, currentPage }: PaginationType) => {
  return (
    <div className="flex justify-between pt-5 items-center flex-col md:flex-row gap-2">
      <span className="pagination-show-text md:pl-4">
        Showing {currentPage} of {total} entries
      </span>
      <div className="flex gap-1 p-2">
        <button className="pagination-text pagination-button rounded-l-md">
          First
        </button>
        <button className="pagination-text pagination-button ">Previous</button>
        {currentPage > 1 && (
          <button className="pagination-text pagination-button ">
            {currentPage - 1}
          </button>
        )}
        <button className="pagination-text pagination-button pagination-active">
          {currentPage}
        </button>

        <button className="pagination-text pagination-button ">
          {Number(currentPage) + 1}
        </button>

        <button className="pagination-text pagination-button ">Next</button>
        <button className="pagination-text pagination-button rounded-r-md">
          Last
        </button>
      </div>
    </div>
  );
};

Pagination.defaultProps = {
  total: 30,
  currentPage: 1,
};
export default Pagination;
