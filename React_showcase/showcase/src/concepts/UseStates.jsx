import { useState } from "react";
import '../style/UseStates.css';

function UseStates() {
    const [count, setcount] = useState(0);
    const [color, setcolor] = useState('#7c6af7');
    const [name, setname] = useState('World');
    const colors = ['#7c6af7', '#3c9e6e', '#c25b30', '#e91e8c', '#0288d1'];

    return (
        <div id="usestate" className="concept-section">
      <h2>⚡ useState</h2>
      <p className="concept-desc">
        State badlo → UI khud update ho jaata hai
      </p>

      {/* Demo 1 - Counter */}
      <div className="demo-box">
        <p className="demo-title">Demo 1 — Counter</p>
        <div className="counter-row">
          <button onClick={() => setcount(count - 1)}>−</button>
          <span className="count-display">{count}</span>
          <button onClick={() => setcount(count + 1)}>+</button>
        </div>
        <button className="reset-btn" onClick={() => setcount(0)}>
          Reset
        </button>
      </div>

      {/* Demo 2 - Color Changer */}
      <div className="demo-box">
        <p className="demo-title">Demo 2 — Color Changer</p>
        <div
          className="color-box"
          style={{ backgroundColor: color }}
        >
          {color}
        </div>
        <div className="color-btns">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setcolor(c)}
              style={{ backgroundColor: c }}
              className="color-dot"
            />
          ))}
        </div>
      </div>

      {/* Demo 3 - Input */}
      <div className="demo-box">
        <p className="demo-title">Demo 3 — Input se State</p>
        <input
          type="text"
          placeholder="Enter your name..."
          onChange={(e) => setname(e.target.value)}
          className="name-input"
        />
        <p className="greeting">Hello, {name}! 👋</p>
      </div>

    </div>
  )
}

export default UseStates;