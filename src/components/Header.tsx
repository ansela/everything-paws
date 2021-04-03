import React from "react"
import { fade, makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import MoreIcon from "@material-ui/icons/MoreVert"
import Link from "@material-ui/core/Link"
import {
  NavLink as RouterLink,
  useHistory,
  useLocation,
} from "react-router-dom"
import { getHeaderLinks, Page } from "../constants"

import logo from "../img/logo.jpg"
import words from "../img/logo-words.jpg"
import clsx from "clsx"
import { Box, Button } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  header: {
    justifyContent: "space-between",
  },
  headerText: {
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      width: "100%",
      textAlign: "center",
    },
    [theme.breakpoints.down("md")]: {
      flex: 1,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    "& a": {
      padding: theme.spacing(1),
    },
    zIndex: 100,
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  activeLink: {
    color: theme.palette.primary.main,
    fontStyle: "italic",
  },
  img: {
    height: theme.spacing(7),
    "&:hover": {
      cursor: "pointer",
    },
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    zIndex: 100,
  },
  button: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
}))

export default function PrimarySearchAppBar() {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const headerPages: Page[] = getHeaderLinks()

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const handleLogoClick = () => {
    if (location.pathname !== "/") history.push("/")
  }

  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {headerPages.map((page: Page) => (
        <MenuItem key={page.title} onClick={handleMobileMenuClose}>
          <Link component={RouterLink} to={page.link}>
            {page.title}
          </Link>
        </MenuItem>
      ))}
      <MenuItem onClick={handleMobileMenuClose}>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          href="https://everythingpaws.gingrapp.com/front_end/login/email"
          target="_blank"
        >
          Log In
        </Button>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Button
          size="small"
          color="default"
          variant="outlined"
          href="http://173.165.199.137:8080"
          target="_blank"
        >
          Live View
        </Button>
      </MenuItem>
    </Menu>
  )

  return (
    <nav>
      <AppBar position="relative" style={{ height: "25px" }}>
        <Toolbar style={{ minHeight: "25px" }}></Toolbar>
      </AppBar>
      <AppBar position="static" color="transparent">
        <Toolbar className={classes.header}>
          <img
            src={logo}
            alt="Everything is Pawsible logo"
            className={clsx(classes.img, classes.logo)}
            onClick={handleLogoClick}
          />
          <Box className={classes.headerText}>
            <img
              src={words}
              alt="Everything is Pawsible"
              className={classes.img}
              onClick={handleLogoClick}
            />
          </Box>
          <div className={classes.sectionDesktop}>
            {headerPages.map((page: Page) => (
              <Link
                key={page.title}
                component={RouterLink}
                to={page.link}
                color="textSecondary"
                exact={page.exact}
                activeClassName={classes.activeLink}
              >
                {page.title}
              </Link>
            ))}
            <Button
              size="small"
              color="primary"
              variant="outlined"
              className={classes.button}
              href="https://everythingpaws.gingrapp.com/front_end/login/email"
              target="_blank"
            >
              Log In
            </Button>
            <Button
              size="small"
              color="default"
              variant="outlined"
              className={classes.button}
              href="http://173.165.199.137:8080"
              target="_blank"
            >
              Live View
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </nav>
  )
}
