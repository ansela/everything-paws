import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core"
import * as React from "react"
import PageTitle from "../PageTitle"
import Section from "../Section"
import { Pets } from "@material-ui/icons"
import detailsPic from "../../img/outdoor-large5.jpg"
import outdoorPic from "../../img/outdoor-large2.jpg"
import indoorPic from "../../img/indoor2.jpg"

const Daycare = () => {
  return (
    <Container maxWidth="lg">
      <PageTitle title="Daycare" />
      <Box display="flex" flexDirection="column">
        <Section
          pic={detailsPic}
          header="The Details"
          text={
            <>
              <Typography gutterBottom>
                Your pet is sure to come home tired from playing all day!{" "}
                <Box fontStyle="italic" display="inline" color="secondary">
                  <Typography color="textSecondary" display="inline">
                    Please note
                  </Typography>
                </Box>{" "}
                some restrictions may apply on holidays.
              </Typography>
              <Typography variant="h6" component="h2" color="primary">
                Daycare Hours
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                Monday - Friday
              </Typography>
              <Typography variant="overline" color="textSecondary">
                Drop Off
              </Typography>
              <Typography variant="body2" gutterBottom>
                7:00 am - 12:30 am
              </Typography>
              <Typography variant="overline" color="textSecondary">
                Pick Up
              </Typography>
              <Typography variant="body2" gutterBottom>
                3:30 pm - 7:00 pm
              </Typography>
            </>
          }
        />
        <Grid container>
          <Grid item md={6} sm={12}>
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
              Without these vaccinations, we will be unable to accept your pet
              for any service. Proof of vaccination is required during check-in.
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
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography
              variant="h4"
              component="h2"
              color="primary"
              gutterBottom
              align="center"
            >
              Pricing
            </Typography>
            <List aria-label="list of required vaccinations">
              <ListItem>
                <ListItemIcon>
                  <Pets color="primary" />
                </ListItemIcon>
                <ListItemText primary="$30 per day" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Pets color="primary" />
                </ListItemIcon>
                <ListItemText primary="$20 per extra dog" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Pets color="primary" />
                </ListItemIcon>
                <ListItemText primary="Daycare package - 10 days of daycare for $270" />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider />
        <Section
          pic={outdoorPic}
          header="Outdoor Space"
          text="Your dogs will have ample room to run around, play, and release all of their daily energy in our outdoor play facility. Over 6,000 square feet of state-of-the-art synthetic turf allows all dogs room to play with others, or do their own thing and enjoy the outdoor air. We maintain 3 water stations, along with a shaded areas, so no dog risks becoming dehydrated or overheated. An entertaining splash pad is available for those dogs who enjoy the water and three pools have water changed every day for those dogs who like to take a dip!"
        />
        <Section
          reverse
          pic={indoorPic}
          header="Indoor Space"
          text="There is 1,200 square feet of space inside our facility for your dogs to play, relax, and everything in between when the weather outside is bad. Our daycare team monitors all activities throughout the day to ensure your dogs have a happy and safe day! Indoor facilities include dog beds, toys, and an indoor tunnel."
        />
      </Box>
    </Container>
  )
}

export default Daycare
