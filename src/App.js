import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <p className="xyz">Lorem ipsum dolor, amet consectetur</p>

      <label htmlFor="myinput">
        Name
        <input id="myinput"></input>
      </label>
    </>
  )
}

export default App