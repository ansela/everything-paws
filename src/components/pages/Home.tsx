import { Box, Container, Divider, Grid, Typography } from "@material-ui/core"
import * as React from "react"
import Hero from "../Hero"
import facilityPic from "../../img/facility.jpg"
import mapPic from "../../img/map.png"
import boardingPic from "../../img/medium1.jpg"
import daycarePic from "../../img/outdoor-large1.jpg"
import Section from "../Section"
import PageCard from "../PageCard"
import PageTitle from "../PageTitle"

const Home = () => {
  return (
    <>
      <Hero />

      <Container maxWidth="lg">
        <Box pt={6} display="flex" flexDirection="column">
          <Section
            pic={mapPic}
            header="Central Location"
            text={
              <>
                Our beautiful pet friendly facility is located at{" "}
                <Typography color="primary" component="span">
                  925 8th Ave S
                </Typography>{" "}
                in Jacksonville Beach, Florida.
              </>
            }
          />
          <Divider />
          <Section
            reverse
            pic={facilityPic}
            header="Facility"
            text="We have large kennels, spacious indoor and outdoor play areas, a home away from home for your beloved pet. With daily supervised exercise out in these play areas, your dog is bound to have their own vacation!"
          />
        </Box>
        <Divider />
        <PageTitle title="Services" />
        <Grid container spacing={5}>
          <Grid item md={6} sm={12}>
            <PageCard
              title="Boarding"
              text="Facilities are available for dogs and cats of all sizes"
              pic={boardingPic}
              to="/boarding"
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <PageCard
              title="Daycare"
              text="Bring your pets for a day full of play time and fun"
              pic={daycarePic}
              to="/daycare"
            />
          </Grid>
          {/* <Grid item md={6} sm={12}>
            <PageCard
              title="Grooming"
              text="Our world class groomer is ready to transform your pets style"
              pic={pic}
              to="/grooming"
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <PageCard
              title="Training"
              text="Help your pet understand what is expected of them"
              pic={pic}
              to="/training"
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  )
}

export default Home
