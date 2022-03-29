import react, { useState } from "react";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);    // errors or not 
  const [list, setList] = useState(new Values("#FF7777").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colros = new Values(color).all(10)
      setList(colros);
    } catch (error) {
      setError(true)
      console.log(error);

    }
  };

  return (
    <>
      <section className="container">
        <h2>
          Color Generator
        </h2>
        <form onSubmit={handleSubmit}>
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
