import { useEffect } from "react"
import SideNav from "./layouts/SideNav"
import Contact from "./layouts/Contact"
import Home from "./layouts/Home"
import Projects from "./layouts/Projects"
import Experience from "./layouts/Experience"
import AOS from "aos"
import "aos/dist/aos.css"
function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <div>
        <SideNav />
        <Home />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
