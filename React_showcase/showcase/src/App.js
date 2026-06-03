import Sidebar from './components/Sidebar'
import Props from './concepts/Props'
import UseStates from './concepts/UseStates'

function App(){
  return(
    <div className="main-container">
      <Sidebar />
      <div className="main-content">
        <h1>React Playground</h1>
        <p style={{ marginBottom: '40px', color: '#b9abf3' }}>
          Har concept ka live demo neeche hai ↓
        </p>
        <Props />
        <UseStates />
      </div>
    </div>
  )
}
export default App