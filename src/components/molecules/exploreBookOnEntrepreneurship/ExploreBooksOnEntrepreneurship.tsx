import { Grid } from "@mui/material";
import React from "react";

const ExploreBooksOnEntrepreneurship = () => {
  return (
    <Grid
      container
      width={"70vw"}
      padding={"20px"}
      bgcolor={"#F1F6F4"}
      margin={"auto"}
      data-testid="exploreBooksOnEntrepreneurshipTest"
    >
      <Grid
        container
        md={5}
        width={"50%"}
        textAlign={"left"}
        marginLeft={"100px"}
        height={"100px"}
      >
        <Grid item>
          <h2>Explore Books on Entrepreneurship</h2>
        </Grid>
        <Grid item color={"#6D787E"}>
          <h4 style={{ margin: "0px", fontWeight: "400" }}>
            Everything you need to know about thriving on a shoestring budget,
            making your first million, and hiring right from the start.
          </h4>
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
  );
};

export default ExploreBooksOnEntrepreneurship;
