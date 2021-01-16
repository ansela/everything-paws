import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import "fontsource-roboto"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core"
import PRIMARY from "@material-ui/core/colors/red"
// import PRIMARY from "@material-ui/core/colors/teal"
import SECONDARY from "@material-ui/core/colors/grey"

let theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY[900],
    },
    secondary: {
      main: SECONDARY[400],
    },
  },
})
theme = responsiveFontSizes(theme)
theme.overrides = {
  MuiDivider: {
    root: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
  },
}

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
      <CssBaseline />
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
