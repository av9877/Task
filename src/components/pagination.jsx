import { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  totalData,
  goToPage,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  console.log(totalPages, "pp");
  if (totalPages <= 1) {
    return null;
  }

  return (
    <>
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-gray-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
        <p>{totalData.length}</p>
      </div>
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={(event) => setCurrentPage(event.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< Prev"
        containerClassName="flex gap-2 mt-4 justify-center"
        pageClassName="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        activeClassName="bg-gray-600 text-white"
      /> */}
    </>
  );
};
export default Pagination;
