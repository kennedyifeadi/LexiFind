import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Nav } from "./components/Nav"
import { Dictionary } from "./pages/Dictionary"
import { Translator } from "./pages/Translator"
import { Thesaurs } from "./pages/Thesaurus"
import { PageNotFound } from "./pages/PageNotFound"
import { Bookmarks } from "./pages/Bookmarks"
import { AnimatePresence } from "framer-motion";


function App() {

  return (
    <BrowserRouter>
      <div className="md:w-full md:h-[100dvh] flex bg-[#FFFFFF]">
      <Nav />
      <div className="h-full w-[82%]">
        <AnimatePresence>
        <Routes>
          <Route path="/" element={<Dictionary/>} exact />
          <Route path="/translator" element={<Translator/>} />
          <Route path="/thesaurus" element={<Thesaurs/>} />
          <Route path="/bookmarks" element={<Bookmarks/>} />
          <Route path="*" element={<PageNotFound/>} /> 
      </Routes>
        </AnimatePresence>
      </div>
      </div>
    </ BrowserRouter>

  )
}

export default App
