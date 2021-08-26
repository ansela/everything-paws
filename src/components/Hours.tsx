import { Typography } from "@material-ui/core"
import * as React from "react"

const Hours = () => {
  return (
    <>
      <Typography variant="overline" component="div">
        Monday - Friday
      </Typography>
      <Typography variant="caption">Daycare & Boarding</Typography>
      <Typography>7:00 am - 12:30 pm</Typography>
      <Typography gutterBottom>3:30 pm - 7:00 pm</Typography>

      <Typography variant="overline" component="div">
        Saturday
      </Typography>
      <Typography variant="caption">Boarding Only</Typography>
      <Typography gutterBottom>9:00 am - 12:30 pm</Typography>

      <Typography variant="overline" component="div">
        Sunday
      </Typography>
      <Typography variant="caption">Boarding Only</Typography>
      <Typography gutterBottom>3:30 pm - 7:00 pm</Typography>
    </>
  )
}

export default Hours
