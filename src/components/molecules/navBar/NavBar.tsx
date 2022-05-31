import Grid from "@mui/material/Grid";
import Logo from "../../atoms/logo/Logo";
import SearchIIcon from "../../atoms/icons/SearchIIcon";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NavDown from "../../atoms/navDown/NavDown";
import Anchor from "../../atoms/anchor/Anchor";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import useStyles from "../../../styles/myStyles";
interface NavBarInterface {
  setExplore?: any;
  explore?: boolean;
  isAuthenticated?: boolean;
}
const NavBar = ({ setExplore, explore, isAuthenticated }: NavBarInterface) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <Grid
      data-testid="navBarTest"
      container
      justifyContent={"space-around"}
      marginBottom={"50px"}
    >
      <Grid
        container
        width={"40vw"}
        bgcolor={"white"}
        justifyContent={"space-around"}
        position={"relative"}
        right={"9%"}
      >
        <Logo
          image="/e60c1b 1.png"
          style={{ height: "40px", marginTop: "15px" }}
        />
        <SearchIIcon sx={{ position: "relative", top: "20px", fontSize: 25 }} />

        <Anchor
          setExplore={setExplore}
          explore={explore}
          sx={{ fontSize: 20, color: "#3A4649", margin: "auto 0px" }}
        >
          Explore
          <NavDown sx={{ position: "relative", top: "3px", fontSize: 20 }} />
        </Anchor>

        <Anchor sx={{ fontSize: 20, color: "#3A4649", margin: "auto 0px" }}>
          My Library
        </Anchor>
      </Grid>
      {isAuthenticated ? (
        <Grid
          item
          onClick={() => {
            isAuthenticated = !isAuthenticated;
          }}
        >
          <Grid
            container
            width={"8%"}
            sx={{
              background: "#69A6E3",
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              position: "relative",
              top: "10px",
            }}
          >
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  position: "relative",
                  right: "12px",
                  fontSize: 18,
                }}
              >
                N
              </Button>
              <NavDown
                sx={{
                  position: "relative",
                  top: "-33px",
                  left: "20px",
                  fontSize: 20,
                }}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>
                  <Logout className={classes.logoutButton}></Logout>
                </MenuItem>
              </Menu>
            </div>
          </Grid>
        </Grid>
      ) : (
        <Grid
          item
          onClick={() => {
            isAuthenticated = !isAuthenticated;
          }}
        >
          <Login className={classes.loginButton}></Login>
        </Grid>
      )}
    </Grid>
  );
};

export default NavBar;
