import { BrowserRouter } from "react-router-dom"
import { Nav } from "./components/Nav"
import { AnimatedRoutes } from "./components/AnimatedRoutes";


function App() {

  return (
    <BrowserRouter>
      <div className="md:w-full h-[100dvh]  flex bg-[#dfdfdf73] overflow-hidden">
      <Nav />
      <AnimatedRoutes />
      </div>
    </ BrowserRouter>

  )
}

export default App
