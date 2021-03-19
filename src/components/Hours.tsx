import { Typography } from "@material-ui/core"
import * as React from "react"

const Hours = () => {
  return (
    <>
      <Typography variant="overline">Monday - Friday</Typography>
      <Typography>7:00 am - 12:00 pm</Typography>
      <Typography gutterBottom>3:00 pm - 7:00 pm</Typography>
      <Typography variant="overline">Saturday</Typography>
      <Typography gutterBottom>7:00 am - 12:00 pm</Typography>
      <Typography variant="overline">Sunday</Typography>
      <Typography gutterBottom>3:00 pm - 7:00 pm</Typography>
    </>
  )
}

export default Hours
