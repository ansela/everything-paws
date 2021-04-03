import {
  Box,
  Button,
  // Box,
  // Button,
  Card,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  // TextField,
  Typography,
} from "@material-ui/core"
import { Business, Email, Phone } from "@material-ui/icons"
import React from "react"
// import { useState } from "react"
import { emailAddress, phoneNumber } from "../../constants"
// import sendEmail from "../../services/sendEmail"
import PageTitle from "../PageTitle"

const useStyles = makeStyles({
  iframe: {
    border: 0,
  },
  bigIcons: {
    width: "2em",
    height: "2em",
  },
})

const Contact = () => {
  const classes = useStyles()
  // const [values, setValues] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // })

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  // ) => {
  //   const { id, value } = e.target
  //   setValues({
  //     ...values,
  //     [id]: value,
  //   })
  // }

  // const handleSendEmail = () => {
  //   console.log("sending email with info", values)
  //   const { name, email, subject, message } = values
  //   sendEmail(name, subject, message, email)
  // }

  return (
    <Container maxWidth="lg">
      <PageTitle title="Contact" />
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.4972951289365!2d-81.39982864842789!3d30.279901481707935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e449a529d3eaa1%3A0x94473cb82958efdd!2s925%208th%20Ave%20S%2C%20Jacksonville%20Beach%2C%20FL%2032250!5e0!3m2!1sen!2sus!4v1611433897992!5m2!1sen!2sus"
              width="100%"
              height="445"
              title="Google Map"
              component="iframe"
              className={classes.iframe}
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} justify="center">
            <Grid
              item
              xs={12}
              md={4}
              container
              spacing={3}
              direction="column"
              alignItems="center"
              alignContent="center"
            >
              <Grid item>
                <Business color="primary" className={classes.bigIcons} />
              </Grid>
              <Grid item>
                <Typography variant="h6" color="textSecondary" align="center">
                  925 8th Ave S
                </Typography>
                <Typography variant="h6" color="textSecondary" align="center">
                  Jacksonville Beach, Florida
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              container
              spacing={3}
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <Phone color="primary" className={classes.bigIcons} />
              </Grid>
              <Grid item>
                <Typography variant="h6" color="textSecondary" align="center">
                  {phoneNumber}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              container
              spacing={3}
              direction="column"
              alignItems="center"
            >
              <Grid item>
                <Email color="primary" className={classes.bigIcons} />
              </Grid>
              <Grid item>
                <Typography variant="h6" color="textSecondary" align="center">
                  {emailAddress}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid
          item
          xs={12}
          md={6}
          lg={4}
          container
          spacing={2}
          direction="column"
        >
          <Grid item>
            <TextField
              id="name"
              label="Name"
              fullWidth
              variant="outlined"
              value={values.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="email"
              label="Email"
              fullWidth
              variant="outlined"
              value={values.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              id="subject"
              label="Subject"
              fullWidth
              variant="outlined"
              value={values.subject}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <TextField
            id="message"
            label="Message"
            fullWidth
            multiline
            rows={8}
            rowsMax={8}
            value={values.message}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Box width="100%" display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSendEmail}
            >
              Submit
            </Button>
          </Box>
        </Grid>*/}
        <Grid item xs={12}>
          <Box textAlign="center">
            <Button
              color="primary"
              size="large"
              variant="contained"
              href="https://everythingpaws.gingrapp.com/front_end/facility"
              target="_blank"
            >
              Contact Us
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contact
