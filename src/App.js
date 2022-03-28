import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  
  return (
    <>
      <section>
        <h2>
          Color Generator
        </h2>
        <form type="text">
          <input type="text" placeholder='Type color'
           onChange={(e) => setColor(e.target.value)} />
          <button typeof='submit' >Get Colors</button>
        </form>
      </section>

    </>
  );
}

export default App;
