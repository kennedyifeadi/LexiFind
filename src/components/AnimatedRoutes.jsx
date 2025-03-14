import { Route, Routes, useLocation } from "react-router-dom"
import { Dictionary } from "../pages/Dictionary"
import { Translator } from "../pages/Translator"
import { Thesaurus } from "../pages/Thesaurus"
import { Bookmarks } from "../pages/Bookmarks"
import { PageNotFound } from "../pages/PageNotFound"
import { AnimatePresence } from "framer-motion"
import { Settings } from "../pages/Settings"

export const AnimatedRoutes = () => {
  const location = useLocation();
    return (
        <div className="h-full w-[86%] absolute right-0 md:w-[82%]">
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Dictionary/>} exact />
                <Route path="/translator" element={<Translator/>} />
                <Route path="/thesaurus" element={<Thesaurus/>} />
                <Route path="/bookmarks" element={<Bookmarks/>} />
                <Route path="/Settings" element={<Settings/>} />
                <Route path="*" element={<PageNotFound/>} /> 
            </Routes>
      </AnimatePresence>
      </div>
    )
}
