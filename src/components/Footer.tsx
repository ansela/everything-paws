import {
  Box,
  Container,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import * as React from "react"
import ContactInfo from "./ContactInfo"
import HelpfulLinks from "./HelpfulLinks"
import Hours from "./Hours"
import SocialMedia from "./SocialMedia"

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    position: "sticky",
    background: theme.palette.grey[900],
    color: theme.palette.getContrastText(theme.palette.grey[900]),
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
              <ContactInfo />
            </Box>
          </Grid>
          <Grid item md={4} sm={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant="overline" color="primary">
                Hours
              </Typography>
              <Hours />
            </Box>
          </Grid>
          <Grid item md={4} sm={12}>
            <Box display="flex" flexDirection="column">
              <Typography variant="overline" color="primary">
                Helpful Links
              </Typography>
              <HelpfulLinks />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <SocialMedia />
    </footer>
  )
}

export default Footer
