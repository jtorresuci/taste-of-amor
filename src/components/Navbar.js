import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar({ logo }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1425px)");
  const navbarRef = useRef(null);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  function handleClickOutside(event) {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      closeMenu();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fbfaf8", color: "black" }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
        ref={navbarRef}
      >
        {/* Logo */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Box sx={{ textAlign: "center", padding: "8px" }}>
            <Link to="/">
              <img src={logo} alt="Logo" style={{ height: "100px" }} />
            </Link>
          </Box>
        </Box>

        {/* Menu button */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Open menu"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
        )}
        {/* Menu */}
        {!isMobile && (
          <Box sx={{ display: "flex" }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/schedule">
              Contact
            </Button>
        
            <Button color="inherit" component={Link} to="/schedule">
              Services
            </Button>
            <Button color="inherit" component={Link} to="/schedule">
              Book Online
            </Button>
            <Button color="inherit" component={Link} to="/schedule">
              Packages
            </Button>
            <Button color="inherit" component={Link} to="/schedule">
              FAQ
            </Button>
          </Box>
        )}
        {/* Mobile menu */}
        {isMobile && (
            <Box
            sx={{
              position: "absolute",
              top: "64px",
              left: 0,
              right: 0,
              backgroundColor: "#fce6f2",
              color: "black",
              zIndex: 1000,
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
              display: isOpen ? "block" : "none",
            }}
          >
          <Stack direction={"column"} spacing={2}>
         
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/">
              Contact
            </Button>
            <Button color="inherit" component={Link} to="/">
              Services
            </Button>
            <Button color="inherit" component={Link} to="/schedule">
              Book Online
            </Button>
            <Button color="inherit" component={Link} to="/">
              Packages
            </Button>
            <Button color="inherit" component={Link} to="/">
              FAQ
            </Button>
            </Stack>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
