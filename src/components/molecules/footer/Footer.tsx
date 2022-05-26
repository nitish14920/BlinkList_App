import Grid from "@mui/material/Grid";
import React from "react";
import Logo from "../../atoms/logo/Logo";
import { TypographyComponent } from "../../atoms/typography/TypographyComponent";

const Footer = () => {
  return (
    <Grid
      data-testid="footerTest"
      container
      bgcolor={"#F1F6F4"}
      padding={"20px"}
    >
      <Grid container width={"70%"} margin={"auto"} height={"30vh"}>
        <Grid container width={"35%"} height={"200px"} marginRight={"50px"}>
          <Grid item md={12} position={"relative"} right={"130px"}>
            <Logo image={"/e60c1b 1.png"}></Logo>
          </Grid>
          <Grid item md={12}>
            <TypographyComponent variant="h4" color="#0365F2">
              Big ideas in small packages start learning now.
            </TypographyComponent>
          </Grid>
        </Grid>
        <Grid container width={"60%"}>
          <Grid item md={4}>
            <TypographyComponent variant="h6" fontWeight={600}>
              Editorial
            </TypographyComponent>
          </Grid>
          <Grid item md={4}>
            <TypographyComponent variant="h6" fontWeight={600}>
              Useful links
            </TypographyComponent>
          </Grid>

          <Grid item md={4}>
            <TypographyComponent variant="h6" fontWeight={600}>
              Company
            </TypographyComponent>
          </Grid>

          <Grid item md={4}>
            <TypographyComponent variant="subtitle2" color="#6D787E">
              Book lists
            </TypographyComponent>
          </Grid>

          <Grid item md={4}>
            <TypographyComponent variant="subtitle2" color="#6D787E">
              Pricing
            </TypographyComponent>
          </Grid>
          <Grid item md={4}>
            <TypographyComponent variant="subtitle2" color="#6D787E">
              About
            </TypographyComponent>
          </Grid>

          <Grid item md={4}>
            <TypographyComponent variant="subtitle2" color="#6D787E">
              What is Notification?
            </TypographyComponent>
          </Grid>

          <Grid item md={4}>
            <TypographyComponent variant="subtitle2" color="#6D787E">
              Blinkist business
            </TypographyComponent>
          </Grid>
          <Grid item md={4}>
            <TypographyComponent variant="subtitle2" color="#6D787E">
              Careers
            </TypographyComponent>
          </Grid>

          <Grid item md={4}>
            <TypographyComponent variant="subtitle2" color="#6D787E">
              what to read next
            </TypographyComponent>
          </Grid>

          <Grid item md={4}>
            <TypographyComponent variant="subtitle2" color="#6D787E">
              Gift cards
            </TypographyComponent>
          </Grid>
          <Grid item md={4}>
            <TypographyComponent variant="subtitle2" color="#6D787E">
              partners
            </TypographyComponent>
          </Grid>

          <Grid item md={4}>
            <TypographyComponent variant="subtitle2" color="#6D787E">
              Benefits of reading
            </TypographyComponent>
          </Grid>

          <Grid item md={4}>
            <TypographyComponent variant="subtitle2" color="#6D787E">
              Blinkist magaine
            </TypographyComponent>
          </Grid>
          <Grid item md={4}>
            <TypographyComponent variant="subtitle2" color="#6D787E">
              Code of Conduct
            </TypographyComponent>
          </Grid>

          <Grid item md={4}>
            <TypographyComponent
              variant="subtitle2"
              color="#6D787E"
            ></TypographyComponent>
          </Grid>

          <Grid item md={4}>
            <TypographyComponent variant="subtitle2" color="#6D787E">
              Contact & Help
            </TypographyComponent>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
