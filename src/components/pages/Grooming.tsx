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
import * as React from "react"
import PageTitle from "../PageTitle"
import pic from "../../img/cat.jpg"
import { Pets } from "@material-ui/icons"

const Grooming = () => {
  return (
    <Container maxWidth="lg">
      <PageTitle title="Grooming" />
      <Typography align="center" variant="body1">
        Our facility includes a # square foot, state of the art, grooming
        facility. Bring your pets in for a grooming appointment, or schedule
        grooming during your dog's boarding stay so they come home nice and
        fresh. Whatever you decide, our groomer can help to ensure your dog
        looks their best at any time!
      </Typography>
      <Divider />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia component="img" src={pic} />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            gutterBottom
            align="center"
          >
            Grooming Services
          </Typography>
          <Typography align="center" variant="body2">
            Our groomer provides a wide variety of services to help meet every
            pets needs. During a complimentary consultation, she will work with
            you to determine the best services for your needs.
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <List subheader={<ListSubheader>Dog Services</ListSubheader>}>
                <ListItem>
                  <ListItemIcon>
                    <Pets color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Clipping" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Pets color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Bathing" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Pets color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Face trim" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Pets color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Drying" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Pets color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Tick removal" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Pets color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Hand stripping" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Pets color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Ear cleaning" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Pets color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Feet & nail trim" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Pets color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Anal gland cleaning" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <List subheader={<ListSubheader>Cat Services</ListSubheader>}>
                <ListItem>
                  <ListItemIcon>
                    <Pets color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Brushing" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Pets color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Bathing" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Pets color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Drying" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Pets color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Ear cleaning" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Pets color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Feet & nail trim" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="overline" color="primary">
            Resident Groomer
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Hermione Granger
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sed lacus elit. Maecenas purus dui, condimentum vitae tempus vitae,
            sagittis eu eros. Nulla sagittis accumsan convallis. Morbi rhoncus
            sem non justo lacinia, vel rutrum justo volutpat. Fusce rhoncus
            sagittis dui eu dapibus. In ex justo, euismod elementum metus in,
            sodales viverra leo. Pellentesque gravida lectus in sollicitudin
            pretium. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Ut non velit venenatis, mattis elit
            sed, finibus tortor. Vivamus fringilla sagittis turpis, sit amet
            vehicula ante. Nunc sagittis velit luctus ligula pulvinar, non porta
            libero placerat. In interdum mollis volutpat.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia component="img" src={pic} />
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Grooming
