import {
  Box,
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
      <Container maxWidth="md">
        <Grid container justify="space-evenly">
          <Grid item md={4} sm={12}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="overline" color="primary">
                Everything Is Pawsible Kennel
              </Typography>
              <Typography>Location, phone etc.</Typography>
            </Box>
          </Grid>
          <Grid item md={4} sm={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant="overline" color="primary">
                Hours
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} sm={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant="overline" color="primary">
                Helpful Links
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
