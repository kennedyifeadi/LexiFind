import { Route, Router, Switch } from "react-router-dom/cjs/react-router-dom"
import { Nav } from "./components/Nav"
import { Dictionary } from "./pages/Dictionary"
import { Translator } from "./pages/Translator"
import { Thesaurs } from "./pages/Thesaurs"
import { PageNotFound } from "./pages/PageNotFound"
import { Bookmarks } from "./pages/Bookmarks"


function App() {

  return (
    <Router>
    <div className="md:w-full md:h-[100dvh] flex flex-col bg-[#FFFFFF]">
      <Nav />
      <div className="h-full w-[82%]">
        <Switch>
          <Route path="/" component={Dictionary} exact />
          <Route path="/translator" component={Translator} />
          <Route path="/thesaurs" component={Thesaurs} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route component={PageNotFound} /> 
        </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App
