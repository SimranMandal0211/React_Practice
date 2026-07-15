import { useEffect, useState } from "react";
function App(){
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e){
      if(e.key === "Escape"){
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  return(
    <>
      <h1>Model / Dialog</h1>

      <button onClick={() => setIsOpen(true)}>
        Model
      </button>

      {isOpen && (
        <div onClick={() => setIsOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <h2>React Model</h2>

            <p> This is model dialog.</p>

            <button onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App;