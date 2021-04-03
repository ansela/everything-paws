import {
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@material-ui/core"
import { Pets } from "@material-ui/icons"
import * as React from "react"
import PageTitle from "../PageTitle"
import pic from "../../img/cat.jpg"

const Training = () => {
  return (
    <Container maxWidth="lg">
      <PageTitle title="Training" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Typography
            variant="h5"
            component="h2"
            color="primary"
            align="center"
            gutterBottom
          >
            Please look for a future schedule coming soon!
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Dog training classes will be held{" "}
            <Typography display="inline" color="primary">
              once a week
            </Typography>{" "}
            in our indoor training facility.
          </Typography>
          <List
            subheader={
              <ListSubheader color="primary">Available Classes</ListSubheader>
            }
          >
            <ListItem>
              <ListItemIcon>
                <Pets color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Puppy training"
                secondary="Begin training early with our puppy training classes, specifically geared towards dogs younger than 2 years old"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Pets color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Basic Obedience"
                secondary="Need to teach your dog some basic manners? This class will give you all the skills needed to train your dog with basic obedience commands"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Pets color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Private"
                secondary="Perfect for when you want personalized attention to work on key skills important to you and your dog"
              />
            </ListItem>
          </List>
          <Divider />
          <Typography
            variant="h5"
            component="h2"
            color="primary"
            align="center"
            gutterBottom
          >
            About Our Facility
          </Typography>
          <Typography variant="body1">
            Our indoor training facility includes 1,200 square feet of space,
            with a maximum class size of # dogs. Dogs will learn basic commands
            such as sit, stay, and lay down, as well as how to interact with
            other dogs and people. (Add some more information here about the
            facility. Consider expanding this section to talk about the classes
            themselves, how long are they, what is the format etc.)
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardMedia component="img" src={pic} />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardMedia component="img" src={pic} />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardMedia component="img" src={pic} />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Training
