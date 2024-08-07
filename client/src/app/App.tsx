import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import './App.scss';
import { BarecodeScaner } from "../shared/components";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <BarecodeScaner/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  )
}

export default App
