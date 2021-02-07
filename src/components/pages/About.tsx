import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core"
import * as React from "react"
import PageTitle from "../PageTitle"
import pic from "../../img/cat.jpg"

const About = () => {
  return (
    <Container maxWidth="lg">
      <PageTitle title="About Us" />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia component="img" src={pic} />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="overline" color="primary">
            Owner and Operator
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Missy Ansell
          </Typography>
          <Typography variant="body1">
            Melissa’s dream has always been to open up her own kennel where she
            can spend time with furry friends while treating them like her own!
            Melissa has worked at many different kennels in New York, California
            and Florida. She started her own business in 2016 doing pet sitting
            and dog walking after graduating from Bergin University of Canine
            Sciences. With the help of her loving family, she was finally able
            to achieve her dream and open up a kennel! With both indoor, and
            outdoor play areas, your dog will always be able to have fun! The
            knowledgeable staff will treat your dogs like family while they are
            here!
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Typography
        variant="h4"
        component="h2"
        color="primary"
        align="center"
        gutterBottom
      >
        Our Team
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardMedia component="img" src={pic} />
            <CardContent>
              <Typography variant="overline" color="primary">
                Kennel Staff
              </Typography>
              <Typography variant="h5" component="h3">
                Harry Potter
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardMedia component="img" src={pic} />
            <CardContent>
              <Typography variant="overline" color="primary">
                Kennel Staff
              </Typography>
              <Typography variant="h5" component="h3">
                Ron Weasley
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardMedia component="img" src={pic} />
            <CardContent>
              <Typography variant="overline" color="primary">
                Resident Groomer
              </Typography>
              <Typography variant="h5" component="h3">
                Hermione Granger
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardMedia component="img" src={pic} />
            <CardContent>
              <Typography variant="overline" color="primary">
                Owner & Support
              </Typography>
              <Typography variant="h5" component="h3">
                Craig Ansell
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
