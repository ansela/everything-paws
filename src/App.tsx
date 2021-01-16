import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import "fontsource-roboto"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core"
import RED from "@material-ui/core/colors/red"

let theme = createMuiTheme({
  palette: {
    primary: {
      main: RED[900],
    },
  },
})
theme = responsiveFontSizes(theme)

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  body: {
    flexGrow: 1,
  },
})

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <Header />
          <Body />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
