import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);


  return (
    <>
      <section className="container">
        <h2>
          Color Generator
        </h2>
        <form type="text">
          <input type="text" placeholder='Type color'
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}   
            />
            <button className="btn" typeof='submit' >Get Colors</button>
        </form>
      </section>

    </>
  );
}

export default App;
