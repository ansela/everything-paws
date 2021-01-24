import { Link } from "@material-ui/core"
import * as React from "react"
import { getHelpfulLinks, Page } from "../constants"
import { Link as RouterLink } from "react-router-dom"

const HelpfulLinks = () => {
  const helpfulPages: Page[] = getHelpfulLinks()

  return (
    <>
      {helpfulPages.map((page: Page) => (
        <Link
          key={page.title}
          component={RouterLink}
          gutterBottom
          to={page.link}
          color="inherit"
          variant="body1"
        >
          {page.title}
        </Link>
      ))}
    </>
  )
}

export default HelpfulLinks
