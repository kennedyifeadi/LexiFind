import { BrowserRouter } from "react-router-dom"
import { Nav } from "./components/Nav"
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { TranslatorDashboardProvider } from "./context/TranslatorDashboardContext";
import { ThesaurusDashboardProvider } from "./context/ThesaurusDashboardContext";
import { TranslateProvider } from "./context/TranslateContext";
import { ThesaurusProvider } from "./context/thesaurusContext";


function App() {

  return (
    <BrowserRouter>
      <TranslateProvider>
        <TranslatorDashboardProvider>
          <ThesaurusDashboardProvider>
            <ThesaurusProvider>
              <div className="md:w-full h-[160dvh] md:h-[100dvh] relative flex bg-[#f0eeee73] md:overflow-hidden">
              <Nav />
              <AnimatedRoutes />
              </div>
            </ThesaurusProvider>
         </ThesaurusDashboardProvider>
        </TranslatorDashboardProvider>
      </TranslateProvider>
    </ BrowserRouter>

  )
}

export default App
