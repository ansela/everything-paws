import {
  Box,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import * as React from "react"
import pic from "../img/reception.jpg"
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
    maxHeight: "75vh",
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
  const medium = useMediaQuery(theme.breakpoints.up("sm"))

  const hours = (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">Hours</Typography>
        <Hours />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">Contact</Typography>
        <ContactInfo />
      </Grid>
    </Grid>
  )
  const title = (
    <Typography
      variant="h2"
      component="h1"
      gutterBottom
      align={medium ? "left" : "center"}
      color={medium ? "inherit" : "primary"}
    >
      Welcome to Everything is Pawsible Kennel!
    </Typography>
  )
  return (
    <>
      <div className={classes.root}>
        {medium && <div className={classes.overlay} />}
        <Box
          width={big ? "55%" : "60%"}
          position="absolute"
          p={6}
          display="flex"
          flexDirection="column"
          maxWidth="700px"
          //   alignItems="center"
        >
          {medium && title}
          {big && hours}
        </Box>
        <img src={pic} className={classes.img} alt="hero" />
      </div>
      {!big && (
        <Box my={6} mx={2}>
          {!medium && title}
          {hours}
        </Box>
      )}
    </>
  )
}

export default Hero
