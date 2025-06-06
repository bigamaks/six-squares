import { useEffect, useState } from "react";
import Square from "./Square";

function App() {
  const [squareColor, setSquareColor] = useState(new Array(6).fill(false));
  const [clickSequence, setClickSequence] = useState([])
    const [isResetting, setIsResetting] = useState(false);

  function handleSquareClick(index) {
     if (squareColor[index] || isResetting) return;
    const newColors = [...squareColor];  
    newColors[index] = true;             
     setSquareColor(newColors);  

     setClickSequence(prev => [...prev, index]);
    
  }
    useEffect(() => {
    if (squareColor.every(val => val === true)) {
      setIsResetting(true);
      const reversed = [...clickSequence].reverse();

      reversed.forEach((index, i) => {
        setTimeout(() => {
          setSquareColor(prev => {
            const updated = [...prev];
            updated[index] = false;
            return updated;
          });
        }, i * 300);
      });

      setTimeout(() => {
        setClickSequence([]);
        setIsResetting(false);
      }, reversed.length * 300);
    }
  }, [squareColor, clickSequence]);



  const arr = [0, 1, 2, 3, 4, 5];
  return (
    <div  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: "0px auto",
    overflow: "hidden",
    // marginLeft: "500px"

  }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px"}}>
      {arr.map((index) => (
        <Square 

        key={index}
        onClick={() => handleSquareClick(index)}
          isGreen={squareColor[index]}
         />
      ))}
    </div>
    </div>
  );
}

export default App;
