import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core"
import * as React from "react"
import { Link as RouterLink } from "react-router-dom"

interface Props {
  title: string
  text: string
  pic: string
  to: string
}

const PageCard = ({ title, text, pic, to }: Props) => {
  return (
    <Card>
      <CardMedia src={pic} title="pic" component="img" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" component={RouterLink} to={to}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default PageCard
