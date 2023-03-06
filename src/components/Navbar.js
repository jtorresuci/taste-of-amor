import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <AppBar position="static" sx={{ justifyContent: "center" }}>
   <Toolbar>
        {/* Logo */}
        <Box sx={{ flexGrow: 1, textAlign: "center", padding: "8px" }}>
          <Link to="/">
            <img src="https://dummyimage.com/100x100/000/fff" alt="Logo" />
          </Link>
        </Box>

        {/* Menu button */}
        {isMobile && (
          <IconButton
            edge="start"
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
            <Button color="inherit" component={Link} to="/contact">
              Contact
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
              backgroundColor: "black",
              color: "#ff4081",
              zIndex: 1000,
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
              display: isOpen ? "block" : "none",
            }}
          >
            <Button
              fullWidth
              color="inherit"
              onClick={closeMenu}
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              fullWidth
              color="inherit"
              onClick={closeMenu}
              component={Link}
              to="/about"
            >
              About
            </Button>
            <Button
              fullWidth
              color="inherit"
              onClick={closeMenu}
              component={Link}
              to="/contact"
            >
              Contact
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
