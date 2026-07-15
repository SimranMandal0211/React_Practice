import faqData from "./faqData";
import { useState } from "react";

function App() {
  const [openIds, setOpenIds] = useState([]);

  function handleOpeningQA(id) {
    if (openIds.includes(id)) {
      setOpenIds((prev) => prev.filter((item) => item !== id));
    } else {
      setOpenIds((prev) => [...prev, id]);
    }
  }

  return (
    <>
      <h1>Accordion</h1>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          maxWidth: "600px",
          margin: "30px auto",
        }}
      >
        {faqData.map((item) => {
          const isOpen = openIds.includes(item.id);

          return (
            <li
              key={item.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "6px",
                marginBottom: "12px",
                overflow: "hidden",
              }}
            >
              <div
                onClick={() => handleOpeningQA(item.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "15px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <span
                  style={{
                    width: "20px",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  {isOpen ? "-" : "+"}
                </span>

                <span>{item.question}</span>
              </div>

              <div
                style={{
                  maxHeight: isOpen ? "200px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                  borderTop: isOpen ? "1px solid #ddd" : "none",
                }}
              >
                <div
                  style={{
                    padding: "15px",
                  }}
                >
                  {item.answer}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;