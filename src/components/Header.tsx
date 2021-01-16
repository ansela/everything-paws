import React from "react"
import { fade, makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import InputBase from "@material-ui/core/InputBase"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import SearchIcon from "@material-ui/icons/Search"
import MoreIcon from "@material-ui/icons/MoreVert"
import Link from "@material-ui/core/Link"
import { NavLink as RouterLink } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
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
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}))

export default function PrimarySearchAppBar() {
  const classes = useStyles()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget)
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
      <MenuItem onClick={handleMobileMenuClose}>
        <Link component={RouterLink} to="/">
          Home
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link component={RouterLink} to="/about">
          About
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link component={RouterLink} to="/boarding">
          Boarding
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link component={RouterLink} to="/daycare">
          Daycare
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link component={RouterLink} to="/grooming">
          Grooming
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link component={RouterLink} to="/training">
          Training
        </Link>
      </MenuItem>
    </Menu>
  )

  return (
    <nav>
      <AppBar position="static" style={{ height: "25px" }}>
        <Toolbar></Toolbar>
      </AppBar>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Everything Is Pawsible
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link component={RouterLink} to="/" color="textSecondary">
              Home
            </Link>
            <Link component={RouterLink} to="/about" color="textSecondary">
              About
            </Link>
            <Link component={RouterLink} to="/boarding" color="textSecondary">
              Boarding
            </Link>
            <Link component={RouterLink} to="/Daycare" color="textSecondary">
              Daycare
            </Link>
            <Link component={RouterLink} to="/Grooming" color="textSecondary">
              Grooming
            </Link>
            <Link component={RouterLink} to="/Training" color="textSecondary">
              Training
            </Link>
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
