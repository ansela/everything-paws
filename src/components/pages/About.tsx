import {
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import * as React from "react"
import PageTitle from "../PageTitle"
import missyBioPic from "../../img/missy-bio.jpeg"
import dadBioPic from "../../img/dad-bio.jpeg"
import julieBioPic from "../../img/julie-bio.jpeg"
import pic from "../../img/cat.jpg"

const About = () => {
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Container maxWidth="lg">
      <PageTitle title="About Us" />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia component="img" src={missyBioPic} />
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
      <Grid container spacing={6} direction={small ? "column-reverse" : "row"}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="overline"
            color="primary"
            align={small ? "left" : "right"}
            component="div"
          >
            Dog Play Area Coordinator
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            align={small ? "left" : "right"}
          >
            Julie Bolling
          </Typography>
          <Typography variant="body1" align={small ? "left" : "right"}>
            Julie has been an animal lover since she was in diapers! She grew up
            in Ponte Vedra Beach and graduated from the College of Journalism &
            Communications at University of Florida where she focused on
            Advertising, Sociology and Statistics. Julie moved to Minneapolis
            after graduating where she worked in Healthcare and Sales...while
            serving as a dog-sitter for coworkers and friends! Eventually she
            found her way back to Florida and was thrilled when Missy asked her
            to join the Everything Is Pawsible Team!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia component="img" src={julieBioPic} />
          </Card>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia component="img" src={dadBioPic} />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="overline" color="primary">
            Administration and Support
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Craig Ansell
          </Typography>
          <Typography variant="body1">
            Craig is Missy's Dad. He has been a CPA for over 40 years, and has
            his own accounting business in Ponte Vedra Beach. Craig has owned
            dogs his entire life, and each one has been a poodle. Craig now has
            two standard poodles, one miniature poodle, and the newest, a mini
            teacup poodle. All the dogs gravitate to Craig as he wanders through
            the dog play area checking that all the dogs are having fun. It is
            with great pride that both Craig and his wife, Angela, assist Missy
            in her venture as owner of her own dog kennel! She is dedicated to
            the safety and general well being of all the dogs that visit and
            stay at Everything is Pawsible.
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={6} direction={small ? "column-reverse" : "row"}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="overline"
            color="primary"
            align={small ? "left" : "right"}
            component="div"
          >
            Kennel Coordinator
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            align={small ? "left" : "right"}
          >
            Dave Bolling
          </Typography>
          <Typography variant="body1" align={small ? "left" : "right"}>
            More Information about Dave coming soon!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia component="img" src={pic} />
          </Card>
        </Grid>
      </Grid>
      <Divider />
      {/* <Typography
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
      </Grid> */}
    </Container>
  )
}

export default About
