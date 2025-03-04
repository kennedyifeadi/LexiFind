import { BrowserRouter } from "react-router-dom"
import { Nav } from "./components/Nav"
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { TranslateProvider } from "./context/TranslateContext";
import { DashboardProvider } from "./context/DashboardContext";


function App() {

  return (
    <BrowserRouter>
      <TranslateProvider>
        <DashboardProvider>
        <div className="md:w-full h-[160dvh] md:h-[100dvh] relative flex bg-[#f0eeee73] md:overflow-hidden">
        <Nav />
        <AnimatedRoutes />
        </div>
        </DashboardProvider>
      </TranslateProvider>
    </ BrowserRouter>

  )
}

export default App
