import { useState } from 'react';

const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`); // Sample data

const Pagination = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className='flex flex-col items-center'>
      <ul className='border p-4'>
        {currentItems.map((item, index) => (
          <li
            key={index}
            className='p-2 border-b'>
            {item}
          </li>
        ))}
      </ul>

      <div className='flex gap-2 mt-4'>
        <button
          className='px-3 py-1 bg-gray-300 rounded'
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}>
          Prev
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          className='px-3 py-1 bg-gray-300 rounded'
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
