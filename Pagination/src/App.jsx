import { useState } from "react";

function App(){
  const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Kiwi",
  "Grapes",
  "Pineapple",
  "Watermelon",
  "Papaya",
  "Guava"
];
  const pageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(fruits.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentItem = fruits.slice(startIndex, endIndex);

  return(
    <>
      <h1>Pagination</h1>
      <ul>
        {
          currentItem.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))
        }
      </ul>


      <button onClick={() => setCurrentPage(currentPage - 1)}
        disabled = {currentPage === 1}  
      >
        Previous
      </button>

      <span>{currentPage} / {totalPages}</span>

      <button onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </>
  )
}

export default App;