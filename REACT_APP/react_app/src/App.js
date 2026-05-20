import logo from './logo.svg';
// import './App.css';
import Hello from "./Hello"
function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>App components</h1>
      <Hello />
      <img src="https://www.w3schools.com/w3images/fjords.jpg" alt="fjords" width="100%" height="300px"/>
      <img src={logo} alt="logo" width="100%" height="300px"/>
    </div>
  );    
}

export default App;
