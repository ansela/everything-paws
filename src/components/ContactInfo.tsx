import { Typography, Link } from "@material-ui/core"
import * as React from "react"

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
        (555) 555-5555
      </Link>
      <Typography variant="overline">Email</Typography>
      <Link
        href="mailto:ashley.ansell@gmail.com"
        color="inherit"
        display="block"
        gutterBottom
      >
        test@example.com
      </Link>
      <Typography variant="overline">Address</Typography>
      <Typography>925 Eighth Ave S</Typography>
      <Typography gutterBottom>Jacksonville Beach, Florida</Typography>
    </>
  )
}

export default ContactInfo
