import './App.css';
import Header from "./components/Header";

const name = "Mehmet"
const surname = "Seven"


function App() {
  return (
    <>
      <h1>
        {`Benim adım ${name}, soyadım ${surname}`}
      </h1>
    </>
  )
}

export default App