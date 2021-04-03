import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  makeStyles,
  Paper,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
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
  card: {
    height: "300px",
    width: "50%",
    position: "absolute",
    top: "12.5%",
    left: theme.spacing(11),
  },
  img: {
    height: "100%",
  },
  textReverse: {
    float: "left",
  },
  cardReverse: {
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
  className?: string
}

const Section = ({ pic, text, reverse, header, className }: Props) => {
  const classes = useStyles()
  const theme = useTheme()
  const smallWidth = useMediaQuery(theme.breakpoints.down("sm"))

  if (smallWidth) {
    return (
      <Box py={2}>
        <Card>
          <CardMedia src={pic} alt={pic} component="img" />
          <CardContent>
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
          </CardContent>
        </Card>
      </Box>
    )
  }

  return (
    <Box m={6} position="relative">
      <Card className={clsx(classes.card, reverse && classes.cardReverse)}>
        <CardMedia
          src={pic}
          className={classes.img}
          alt={pic}
          component="img"
        />
      </Card>
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
