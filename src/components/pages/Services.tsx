import { Container, Grid } from "@material-ui/core"
import React from "react"
import PageTitle from "../PageTitle"
import pic from "../../img/cat.jpg"
import PageCard from "../PageCard"
import boardingPic from "../../img/medium1.jpg"
import daycarePic from "../../img/outdoor-large1.jpg"

const Services = () => {
  return (
    <Container maxWidth="md">
      <PageTitle title="Services" />
      <Grid container spacing={2}>
        <Grid item md={6} sm={12}>
          <PageCard
            title="Boarding"
            text="Facilities are available for dogs and cats of all sizes"
            pic={boardingPic}
            to="/boarding"
            hideButton
          />
        </Grid>
        <Grid item md={6} sm={12}>
          <PageCard
            title="Daycare"
            text="Bring your pets for a day full of play time and fun"
            pic={daycarePic}
            to="/daycare"
            hideButton
          />
        </Grid>
        <Grid item md={6} sm={12}>
          <PageCard
            title="Grooming"
            text="Our world class groomer is ready to transform your pets style"
            pic={pic}
            to="/grooming"
            hideButton
          />
        </Grid>
        <Grid item md={6} sm={12}>
          <PageCard
            title="Training"
            text="Help your pet understand what is expected of them"
            pic={pic}
            to="/training"
            hideButton
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Services
