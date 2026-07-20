import { useState } from "react";
import faqData from './faqData';

function App(){

  const [isOpen, setIsOpen] = useState(null);

  function handleToggle(id){
    setIsOpen((prev) => prev === id ? null : id)
  }

  return(
    <>
      <h1>Accordian</h1>

      <ul>
        {faqData.map((data) => (
          <li key={data.id}>
            <button onClick={() => handleToggle(data.id)}>
              {data.question}
            </button>

            {isOpen === data.id && (
              <p>{data.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;