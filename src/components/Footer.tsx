import {
  Container,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import * as React from "react"

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    position: "sticky",
    background: theme.palette.grey[900],
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container justify="space-evenly">
          <Grid item md={4} sm={12}>
            <Typography variant="overline" color="primary">
              Everything Is Pawsible Kennel
            </Typography>
            <Typography>Location, phone etc.</Typography>
          </Grid>
          <Grid item md={4} sm={12}>
            <Typography variant="overline" color="primary">
              Hours
            </Typography>
          </Grid>
          <Grid item md={4} sm={12}>
            <Typography variant="overline" color="primary">
              Helpful Links
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
