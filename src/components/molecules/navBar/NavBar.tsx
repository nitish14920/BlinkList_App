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
import { TypographyComponent } from "../../atoms/typography/TypographyComponent";
import { Box, ThemeProvider } from "@mui/material";
import theme from "../../../theme";
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
    <ThemeProvider theme={theme}>
      <Grid
        data-testid="navBarTest"
        container
        justifyContent={"space-around"}
        margin={"0 0 0 50px"}
        marginBottom={"50px"}
        height={"86px"}
      >
        <Grid
          container
          width={"940px"}
          height={"86px"}
          bgcolor={"white"}
          justifyContent={"space-between"}
          position={"relative"}
          right={"9%"}
        >
          <Grid item md={2} margin="auto 0px ">
            <Logo
              image="/e60c1b 1.png"
              style={{ width: "124.09px", height: "26px" }}
            />
          </Grid>

          <Grid item md={2} margin="auto 0px">
            {" "}
            <SearchIIcon sx={{ fontSize: 20 }} />
          </Grid>
          <Grid item md={2} margin="auto 0px">
            {" "}
            <Anchor
              setExplore={setExplore}
              explore={explore}
              sx={{ fontSize: 20, color: "#3A4649", margin: "auto 0px" }}
            >
              <TypographyComponent variant="body1">
                Explore
                <NavDown
                  sx={{ position: "relative", top: "3px", fontSize: 20 }}
                />
              </TypographyComponent>
            </Anchor>
          </Grid>
          <Grid item md={2} margin="auto 0px">
            <Anchor sx={{ fontSize: 20, color: "#3A4649", margin: "auto 0px" }}>
              <TypographyComponent variant="body1">
                My Library
              </TypographyComponent>
            </Anchor>
          </Grid>

          {isAuthenticated ? (
            <Grid
              item
              onClick={() => {
                isAuthenticated = !isAuthenticated;
              }}
              md={2}
              marginLeft="150px"
              sx={{ position: "relative", left: "100px" }}
            >
              <Box
                width={"8%"}
                sx={{
                  background: "#69A6E3",
                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                  position: "relative",
                  top: "20px",
                }}
              >
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    color="secondary"
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
                      left: "30px",
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
                    <MenuItem onClick={handleClose}>
                      <TypographyComponent
                        color="text.disabled"
                        variant="body2"
                      >
                        Profile
                      </TypographyComponent>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <TypographyComponent
                        color="text.disabled"
                        variant="body2"
                      >
                        My Account
                      </TypographyComponent>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Logout className={classes.logoutButton}></Logout>
                    </MenuItem>
                  </Menu>
                </div>
              </Box>
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
      </Grid>
    </ThemeProvider>
  );
};

export default NavBar;
