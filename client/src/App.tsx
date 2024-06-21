import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./components/AppRouter"
import { SearchForm } from "./components/SearchForm/SearchForm"

function App() {

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
