import { Box } from "@material-ui/core"
import * as React from "react"
import { Switch, Route } from "react-router-dom"
import About from "./pages/About"
import Boarding from "./pages/Boarding"
import Contact from "./pages/Contact"
import Daycare from "./pages/Daycare"
import Faq from "./pages/Faq"
import Gallery from "./pages/Gallery"
import Grooming from "./pages/Grooming"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Training from "./pages/Training"

const Body = () => {
  return (
    <Box py={6} flex="1">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/boarding">
          <Boarding />
        </Route>
        <Route path="/daycare">
          <Daycare />
        </Route>
        <Route path="/grooming">
          <Grooming />
        </Route>
        <Route path="/training">
          <Training />
        </Route>
        <Route path="/FAQ">
          <Faq />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Box>
  )
}

export default Body
