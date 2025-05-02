
import React from 'react';

const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange, onItemsPerPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-6">
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
        >
          Previous
        </button>
        <span className="px-3 py-1 bg-gray-100 rounded-md">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
      <select
        value={itemsPerPage}
        onChange={e => onItemsPerPageChange(Number(e.target.value))}
        className="p-1.5 text-sm rounded-md border border-gray-300"
      >
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
        <option value={50}>50 per page</option>
      </select>
    </div>
  );
};

export default Pagination;