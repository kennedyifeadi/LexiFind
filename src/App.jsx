import { BrowserRouter } from "react-router-dom"
import { Nav } from "./components/Nav"
import { AnimatedRoutes } from "./components/AnimatedRoutes";


function App() {

  return (
    <BrowserRouter>
      <div className="md:w-full h-[160dvh] md:h-[100dvh] relative flex bg-[#f0eeee73] md:overflow-hidden">
      <Nav />
      <AnimatedRoutes />
      </div>
    </ BrowserRouter>

  )
}

export default App
