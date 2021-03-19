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
import pic from "../../img/cat.jpg"
import Section from "../Section"
import { Pets } from "@material-ui/icons"

const Daycare = () => {
  return (
    <Container maxWidth="lg">
      <PageTitle title="Daycare" />
      <Box display="flex" flexDirection="column">
        <Section
          pic={pic}
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
                6:00 am - 10:00 am
              </Typography>
              <Typography variant="overline" color="textSecondary">
                Pick Up
              </Typography>
              <Typography variant="body2" gutterBottom>
                3:00 pm - 7:00 pm
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
                <ListItemText primary="$15 per extra dog" />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider />
        <Section
          pic={pic}
          header="Outdoor Space"
          text="Your dogs will have ample room to run around, play, and release all of their daily energy in our outdoor play facility. Over <#> square feet of space allows all dogs room to play with others, or do their own thing and enjoy the outdoor air. We maintain <#> water stations, along with a canopied shady area, so no dog risks becoming dehydrated or overheated. "
        />
        <Section
          reverse
          pic={pic}
          header="Indoor Space"
          text="There is plenty of space inside our facility for your dogs to play, relax, and everything in between. Our daycare team monitors all activities throughout the day to ensure your dogs have a happy and safe day! Indoor facilities include <insert details about indoor facilities here please>"
        />
      </Box>
    </Container>
  )
}

export default Daycare
