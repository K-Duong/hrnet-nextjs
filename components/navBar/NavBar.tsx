"use client";
import styles from "./navBar.module.css";

// export default function NavBar() {
//   return <div className= {styles.navBar}>Nav bar</div>
// }

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { PATHS } from "@/app/const/constant";

import logo from "@/public/assets/logo.png";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
// import AdbIcon from '@mui/icons-material/Adb';

const settings = ["Dashboard", "Logout"];

interface LinksWrapperProps {
  matchedQuery: boolean;
}
const LinksWrapper = styled("div")<LinksWrapperProps>(
  ({ theme, matchedQuery }) => ({
    display: matchedQuery ? "none" : "flex",
  })
);

function NavBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (matches) {
      setAnchorElNav(event.currentTarget);
    }
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            src={logo}
            alt="logo of Wealth Health"
            width={50}
            className={styles.logo}
            onClick={handleOpenNavMenu}
          />
          {/* links collapse in media query for small screen */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {PATHS.map((path) => (
                <Link href={path.path} key={path.name}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {path.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          {/*links to pages */}
          <LinksWrapper matchedQuery={matches} className={styles.linksWrapper}>
            {PATHS.map((path) => (
              <Link key={path.name} href={path.path}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {path.name}
                </Button>
              </Link>
            ))}
          </LinksWrapper>

          {/* User avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            {/* Menu settings collapse */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
