import { Grid, ThemeProvider } from "@mui/material";
import React from "react";
import { TypographyComponent } from "../../atoms/typography/TypographyComponent";
import theme from "../../../theme";
const ExploreBooksOnEntrepreneurship = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        width={"940px"}
        padding={"30px"}
        paddingLeft={"50px"}
        bgcolor={"#F1F6F4"}
        margin={"auto 0"}
        data-testid="exploreBooksOnEntrepreneurshipTest"
      >
        <Grid
          container
          md={5}
          width={"50%"}
          textAlign={"left"}
          height={"100px"}
        >
          <Grid item>
            <TypographyComponent color="common.black" variant="h1">
              Explore Books on Entrepreneurship
            </TypographyComponent>
          </Grid>
          <Grid item color={"#6D787E"}>
            <TypographyComponent color="text.secondary" variant="subtitle2">
              Everything you need to know about thriving on a shoestring budget,
              making your first million, and hiring right from the start.
            </TypographyComponent>
          </Grid>
        </Grid>
        <Grid container md={2} marginLeft={"200px"}>
          <img
            style={{ height: "200px", width: "200px" }}
            src="/Screenshot from 2022-05-20 11-00-05.png"
            alt=""
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ExploreBooksOnEntrepreneurship;
