import { BrowserRouter } from "react-router-dom"
import { Nav } from "./components/Nav"
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { TranslatorDashboardProvider } from "./context/TranslatorDashboardContext";
import { ThesaurusDashboardProvider } from "./context/ThesaurusDashboardContext";


function App() {

  return (
    <BrowserRouter>
        <TranslatorDashboardProvider>
          <ThesaurusDashboardProvider>
              <div className="md:w-full h-[160dvh] md:h-[100dvh] relative flex bg-[#f0eeee73] md:overflow-hidden">
              <Nav />
              <AnimatedRoutes />
              </div>
         </ThesaurusDashboardProvider>
        </TranslatorDashboardProvider>
    </ BrowserRouter>

  )
}

export default App
