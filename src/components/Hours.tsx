import { Typography } from "@material-ui/core"
import * as React from "react"

const Hours = () => {
  return (
    <>
      <Typography variant="overline">Monday - Friday</Typography>
      <Typography gutterBottom>9:00 am - 7:00 pm</Typography>
      <Typography variant="overline">Saturday</Typography>
      <Typography gutterBottom>9:00 am - 7:00 pm</Typography>
      <Typography variant="overline">Sunday</Typography>
      <Typography gutterBottom>9:00 am - 7:00 pm</Typography>
    </>
  )
}

export default Hours
