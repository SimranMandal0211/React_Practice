import { useEffect, useState } from "react";

function App() {
  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Kiwi",
    "Grapes",
    "Papaya",
    "Guava",
    "Pineapple",
    "Watermelon",
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Kiwi",
    "Grapes",
    "Papaya",
    "Guava",
    "Pineapple",
    "Watermelon",
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Kiwi",
    "Grapes",
    "Papaya",
    "Guava",
    "Pineapple",
    "Watermelon",
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Kiwi",
    "Grapes",
    "Papaya",
    "Guava",
    "Pineapple",
    "Watermelon",
  ];

  const [visibleCount, setVisibleCount] = useState(5);

  const visibleItems = fruits.slice(0, visibleCount);

  useEffect(() => {

    function handleScroll(){
      if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight){
        setVisibleCount((prev) => prev + 3);
      }
    }



    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  return (
    <>
      <h1>Load More</h1>

      <ul>
        {visibleItems.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      {visibleCount < fruits.length && (
        <button
          onClick={() =>
            setVisibleCount((prev) => prev + 3)
          }
        >
          Load More
        </button>
      )}

      <h1>Infinite scroll</h1>

      <ul>
        {fruits
          .slice(0, visibleCount)
          .map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
      </ul>
    </>
  );
}

export default App;