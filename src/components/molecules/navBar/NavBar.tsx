import React from "react";
import Grid from "@mui/material/Grid";
import Logo from "../../atoms/logo/Logo";
import SearchIIcon from "../../atoms/icons/SearchIIcon";

import NavDown from "../../atoms/navDown/NavDown";
import Anchor from "../../atoms/anchor/Anchor";
import { Box } from "@mui/material";

interface NavBarInterface {
  setExplore?: any;
  explore?: boolean;
}
const NavBar = ({ setExplore, explore }: NavBarInterface) => {
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
        {/* <TypographyComponent variant="h6">Nitish</TypographyComponent> */}

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
      <Grid container width={"8%"}>
        <Box
          bgcolor={" #69A6E3"}
          width={"40px"}
          height={"40px"}
          borderRadius={"50%"}
          lineHeight={2}
          marginTop={"10px"}
          fontSize={20}
          marginLeft={"50px"}
          position={"relative"}
          top={"10%"}
        >
          A
        </Box>
        <NavDown
          sx={{
            position: "relative",
            top: "-25px",
            left: "90px",
            fontSize: 20,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default NavBar;
