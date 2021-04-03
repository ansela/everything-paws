import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import * as React from "react"
import PageTitle from "../PageTitle"
import pic from "../../img/cat.jpg"

const useStyles = makeStyles({
  card: {
    height: "100%",
  },
})

const About = () => {
  const classes = useStyles()
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
            and dog walking after graduating from Niagara University with a
            Bachelor of Science degree in Biology, and then from Bergin
            University of Canine Sciences. With the help of her loving family,
            she was finally able to achieve her dream and open up a kennel! With
            both indoor and outdoor play areas, your dog will always be able to
            have fun! The knowledgeable staff will treat your dogs like family
            while they are here!
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
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardMedia component="img" src={pic} />
            <CardContent>
              <Typography variant="overline" color="primary">
                Owner & Operator
              </Typography>
              <Typography variant="h5" component="h3">
                Missy Ansell
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardMedia component="img" src={pic} />
            <CardContent>
              <Typography variant="overline" color="primary">
                Dog Play Area Coordinator
              </Typography>
              <Typography variant="h5" component="h3">
                Julie Bolling
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
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
