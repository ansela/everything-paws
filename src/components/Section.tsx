import {
  Box,
  Divider,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core"
import clsx from "clsx"
import * as React from "react"

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  text: {
    width: "50%",
    float: "right",
  },
  img: {
    height: "300px",
    width: "50%",
    position: "absolute",
    top: "12.5%",
    objectFit: "cover",
    left: theme.spacing(11),
  },
  textReverse: {
    float: "left",
  },
  imgReverse: {
    right: theme.spacing(11),
    left: "unset",
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
}))

interface Props {
  pic: string
  text: string | React.ReactNode
  reverse?: boolean
  header: string
}

const Section = ({ pic, text, reverse, header }: Props) => {
  const classes = useStyles()
  return (
    <Box mx={6} position="relative">
      <img
        src={pic}
        className={clsx(classes.img, reverse && classes.imgReverse)}
        alt={pic}
      />
      <Paper
        color="primary"
        className={clsx(classes.text, reverse && classes.textReverse)}
      >
        <Box
          pr={reverse ? 15 : 4}
          pl={reverse ? 4 : 15}
          py={6}
          alignSelf="flex-end"
          height="400px"
        >
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            gutterBottom
            align="center"
          >
            {header}
          </Typography>
          <Divider variant="middle" className={classes.divider} />
          <Typography variant="body1" color="textPrimary">
            {text}
          </Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default Section
