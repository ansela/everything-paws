import { ReactComponent } from "*.svg"
import { Typography } from "@material-ui/core"
import React, { ReactElement } from "react"

const PageTitle = ({ title }: { title: string }): ReactElement => (
  <Typography variant="h2" gutterBottom align="center" color="textSecondary">
    {title}
  </Typography>
)

export default PageTitle
