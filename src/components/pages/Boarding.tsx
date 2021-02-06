import {
  Box,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import * as React from "react"
import PageTitle from "../PageTitle"
import pic from "../../img/cat.jpg"
import Section from "../Section"
import { Pets } from "@material-ui/icons"

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}))

const Boarding = () => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <PageTitle title="Boarding" />
      <Box pt={6} display="flex" flexDirection="column">
        <Section
          className={classes.section}
          pic={pic}
          header="The Space"
          text="Our spacious kennels are cleaned once a day and have epoxy flooring to help keep them clean longer. The entire facility is air conditioned, so if it is raining or too hot to be out for long, they have an indoor area to play in."
        />
        <Section
          className={classes.section}
          reverse
          pic={pic}
          header="The Details"
          text="We have a stereo system so your pet will have music to listen to at night to keep them relaxed. Security cameras will show you how your pup is doing throughout the day. All pets will have fresh water available at all times and meals can be give three times a day along with any medication needed."
        />
        <Typography
          variant="h4"
          component="h2"
          color="primary"
          gutterBottom
          align="center"
        >
          Vaccinations Required
        </Typography>
        <Typography variant="body1" align="center">
          Without these vaccinations, we will be unable to accept your pet for
          any service. Proof of vaccination is required during check-in.
        </Typography>
        <List aria-label="list of required vaccinations">
          <ListItem>
            <ListItemIcon>
              <Pets color="primary" />
            </ListItemIcon>
            <ListItemText primary="Rabies" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Pets color="primary" />
            </ListItemIcon>
            <ListItemText primary="Distemper/parvo" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Pets color="primary" />
            </ListItemIcon>
            <ListItemText primary="Bordetella" />
          </ListItem>
        </List>
        <Divider />
        <Typography
          variant="h4"
          component="h2"
          color="primary"
          align="center"
          gutterBottom
        >
          We offer a variety of kennel sizes to meet the needs of every dog
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia src={pic} title="pic" component="img" />
            </Card>
            <Typography variant="caption" color="textSecondary">
              Small, perfect for dogs under 25 pounds
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia src={pic} title="pic" component="img" />
            </Card>
            <Typography variant="caption" color="textSecondary">
              Medium, great for smaller to standard sized dogs
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia src={pic} title="pic" component="img" />
            </Card>
            <Typography variant="caption" color="textSecondary">
              Large, excellent for many fully grown dogs
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia src={pic} title="pic" component="img" />
            </Card>
            <Typography variant="caption" color="textSecondary">
              Extra Large, provides extra space for our extra big friends
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Section
          className={classes.section}
          reverse
          pic={pic}
          header="Cat Boarding"
          text="We also offer Cat boarding! We have a room specifically for cats right by the lobby so they can relax away from all the noise of the dogs. Each cat will get their own suite with litter box changed every day, food and water up to three times a day, and any medication they may need."
        />
      </Box>
    </Container>
  )
}

export default Boarding
