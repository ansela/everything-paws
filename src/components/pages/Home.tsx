import { Box, Container, Divider, Grid, Typography } from "@material-ui/core"
import * as React from "react"
import Hero from "../Hero"
import pic from "../../img/cat.jpg"
import Section from "../Section"
import PageCard from "../PageCard"

const Home = () => {
  return (
    <>
      <Hero />

      <Container maxWidth="lg">
        <Box pt={6} display="flex" flexDirection="column">
          <Section
            pic={pic}
            header="Central Location"
            text={
              <>
                Our beautiful pet friendly facility is located at{" "}
                <Typography color="primary" component="span">
                  925 Eighth Ave S
                </Typography>{" "}
                in Jacksonville Beach, Florida.
              </>
            }
          />
          <Divider />
          <Section
            reverse
            pic={pic}
            header="Facility"
            text="We have large kennels, spacious indoor and outdoor play areas, a home away from home for your beloved pet. With daily supervised exercise out in these play areas, your dog is bound to have their own vacation!"
          />
        </Box>
        <Divider />
        <Typography
          variant="h2"
          gutterBottom
          align="center"
          color="textSecondary"
        >
          Services
        </Typography>
        <Grid container spacing={2}>
          <Grid item lg={3} md={6} sm={12}>
            <PageCard
              title="Boarding"
              text="Facilities are available for dogs and cats of all sizes"
              pic={pic}
              to="/boarding"
            />
          </Grid>
          <Grid item lg={3} md={6} sm={12}>
            <PageCard
              title="Daycare"
              text="Bring your pets for a day full of play time and fun"
              pic={pic}
              to="/daycare"
            />
          </Grid>
          <Grid item lg={3} md={6} sm={12}>
            <PageCard
              title="Grooming"
              text="Our world class groomer is ready to transform your pets style"
              pic={pic}
              to="/grooming"
            />
          </Grid>
          <Grid item lg={3} md={6} sm={12}>
            <PageCard
              title="Training"
              text="Help your pet understand what is expected of them"
              pic={pic}
              to="/training"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
