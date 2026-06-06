import '../style/page.css'

function Cheatsheet() {
  return (
    <div className="page">
      <h1>React Cheatsheet ⚡</h1>

      <div className="info-card">
        <h3>Props</h3>
        <p>Parent se child ko data bhejo</p>
        <code>{'<Card name="React" color="blue" />'}</code>
      </div>

      <div className="info-card">
        <h3>useState</h3>
        <p>Value yaad rakho — badle to UI update ho</p>
        <code>const [count, setCount] = useState(0)</code>
      </div>

      <div className="info-card">
        <h3>useEffect</h3>
        <p>Render ke baad kuch karo</p>
        <code>useEffect(() =&gt; {}, [])</code>
      </div>

      <div className="info-card">
        <h3>React Router</h3>
        <p>URL se component match karo</p>
        <code>{'<Route path="/about" element={<About />} />'}</code>
      </div>
    </div>
  )
}

export default Cheatsheet