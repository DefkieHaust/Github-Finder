import { useState } from "react"
import Footer from "./components/templates/Footer"
import Main from "./components/templates/Main"
import Navbar from "./components/templates/Navbar"

const App = () => {

  const [searched, setSearched] = useState("")

  return (
    <div className="h-100">
      <Navbar setSearched={setSearched} />
      <Main searched={searched} />
      <Footer />
    </div>
  )
}

export default App 