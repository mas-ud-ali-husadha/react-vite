interface PaginationType {
  of: number;
  entries: number;
  showing: number;
  limit: number;
  onChange: (arg: number) => void;
}

const Pagination = ({ of, entries, showing, limit, onChange }: PaginationType) => {
  console.log();
  return (
    <div className="flex justify-between pt-5 items-center flex-col md:flex-row gap-1">
      <span className="pagination-show-text md:pl-4">
        Showing {showing} to {of} of {entries} entries
      </span>
      <div className="flex gap-1 p-2">
        <button
          className="pagination-text pagination-button rounded-l-md"
          onClick={() => onChange(1)}
        >
          First
        </button>
        <button
          className="pagination-text pagination-button "
          onClick={() => onChange(Number(showing) - 1)}
        >
          Previous
        </button>

        {Array.from(Array(Math.ceil(entries / limit)), (_, i) => (
          <button
            key={i + 1}
            className={`pagination-text pagination-button ${
              i + 1 == showing ? "pagination-active" : ""
            }`}
            onClick={() => onChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="pagination-text pagination-button "
          onClick={() => onChange(Number(showing) + 1)}
        >
          Next
        </button>

        <button
          className="pagination-text pagination-button rounded-r-md"
          onClick={() => onChange(Math.ceil(entries / of))}
        >
          Last
        </button>
      </div>
    </div>
  );
};

Pagination.defaultProps = {
  of: 0,
  entries: 0,
  showing: 0,
};
export default Pagination;
