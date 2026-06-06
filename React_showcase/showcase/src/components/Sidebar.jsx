function Sidebar() {
  return (
    <div className="sidebar">
      <h2>⚛️ React Concepts</h2>

      <p className="sidebar-section">Pages</p>
      <a href="/">🏠 Home</a>
      <a href="/about">🗺️ React Router</a>
      <a href="/cheatsheet">⚡ Cheatsheet</a>

      <p className="sidebar-section">Concepts</p>
      <a href="#props">📦 Props</a>
      <a href="#usestate">🧠 useState</a>
      <a href="#useeffect">🔄 useEffect</a>
    </div>
  )
}

export default Sidebar