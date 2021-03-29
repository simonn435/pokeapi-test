import React from "react";

const Pagination = ({ page, total, prevPage, nextPage }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        className="btn bg-dark text-light mx-2 font-weight-bold"
        onClick={prevPage}
      >
        {"<"}
      </button>
      <div>
        {page} of {total}
      </div>
      <button
        className="btn bg-dark text-light mx-2 font-weight-bold"
        onClick={nextPage}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
