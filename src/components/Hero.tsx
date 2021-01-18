import {
  Box,
  Button,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import * as React from "react"
import pic from "../img/cat.jpg"
import ContactInfo from "./ContactInfo"
import Hours from "./Hours"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(-6),
    position: "relative",
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    width: "100vw",
    maxHeight: "75vh",
    maxWidth: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 40%, rgb(0,0,0,0))`,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(3),
  },
}))

const Hero = () => {
  const classes = useStyles()
  const theme = useTheme()
  const big = useMediaQuery(theme.breakpoints.up("md"))

  const hours = (
    <Grid container spacing={2} justify="space-evenly">
      <Grid item>
        <Typography variant="h6">Hours</Typography>
        <Hours />
      </Grid>
      <Grid item>
        <Typography variant="h6">Contact</Typography>
        <ContactInfo />
      </Grid>
    </Grid>
  )
  return (
    <>
      <div className={classes.root}>
        <div className={classes.overlay}></div>
        <Box
          width={big ? "55%" : "60%"}
          position="absolute"
          p={6}
          display="flex"
          flexDirection="column"
          maxWidth="700px"
          //   alignItems="center"
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Everything is Pawsible Kennel!
          </Typography>
          {big && hours}
        </Box>
        <img src={pic} className={classes.img} alt="hero" />
      </div>
      {!big && <Box my={6}>{hours}</Box>}
    </>
  )
}

export default Hero
