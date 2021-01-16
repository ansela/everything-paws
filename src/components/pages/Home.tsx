import { Box, Container, Typography } from "@material-ui/core"
import * as React from "react"
import Hero from "../Hero"

const Home = () => {
  return (
    <>
      <Hero />

      <Container maxWidth="md">
        <Box py={6}>
          <Typography variant="body1">
            Our beautiful pet friendly facility is located at 925 Eighth Ave S
            in Jacksonville Beach, Florida. We have large kennels, spacious
            indoor and outdoor play areas, a home away from home for your
            beloved pet. With daily supervised exercise out in these play areas,
            your dog is bound to have their own vacation!
          </Typography>
        </Box>
      </Container>
    </>
  )
}

export default Home
