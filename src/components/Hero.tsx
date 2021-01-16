import { Box, Button, makeStyles, Theme, Typography } from "@material-ui/core"
import * as React from "react"
import pic from "../img/cat.jpg"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(-6),
    position: "relative",
  },
  img: {
    width: "100vw",
    maxHeight: "75vh",
    maxWidth: "100%",
    height: "auto",
    objectFit: "cover",
  },
  overlay: {
    background: `linear-gradient(to right, ${theme.palette.primary.main} 40%, rgb(0,0,0,0))`,
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
  return (
    <div className={classes.root}>
      <div className={classes.overlay}></div>
      <Box
        width="50%"
        position="absolute"
        p={6}
        top="25%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h2" component="h1" align="center">
          Welcome to Everything is Pawsible Kennel!
        </Typography>
        <Button variant="outlined" color="default" className={classes.button}>
          View Services
        </Button>
      </Box>
      <img src={pic} className={classes.img} alt="hero" />
    </div>
  )
}

export default Hero
