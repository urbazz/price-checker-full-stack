import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./components/AppRouter/AppRouter"
import { SearchForm } from "./components/Share/SearchForm/SearchForm"
import onScan from "onscan.js"

function App() {

  onScan.attachTo(document)

  return (
    <>
      <BrowserRouter>
        <SearchForm/>
        <AppRouter/>
      </BrowserRouter>
    </>
  )
}

export default App
