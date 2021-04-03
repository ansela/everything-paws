import { Typography, Link } from "@material-ui/core"
import * as React from "react"
import { emailAddress, phoneNumber } from "../constants"

const ContactInfo = () => {
  return (
    <>
      <Typography variant="overline">Phone</Typography>
      <Link
        href="tel:+17168299205"
        gutterBottom
        color="inherit"
        display="block"
      >
        {phoneNumber}
      </Link>
      <Typography variant="overline">Email</Typography>
      <Link
        href="mailto:ashley.ansell@gmail.com"
        color="inherit"
        display="block"
        gutterBottom
      >
        {emailAddress}
      </Link>
      <Typography variant="overline">Address</Typography>
      <Typography>925 8th Ave S</Typography>
      <Typography gutterBottom>Jacksonville Beach, Florida</Typography>
    </>
  )
}

export default ContactInfo
