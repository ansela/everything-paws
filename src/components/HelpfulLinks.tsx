import { Link } from "@material-ui/core"
import * as React from "react"
import { Page, pages } from "../constants"
import { Link as RouterLink } from "react-router-dom"

const links = ["Boarding", "Daycare", "Grooming", "Training", "FAQ", "Contact"]

const helpfulPages = pages.filter((page: Page) => links.includes(page.title))

const HelpfulLinks = () => {
  return (
    <>
      {helpfulPages.map((page: Page) => (
        <Link
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
