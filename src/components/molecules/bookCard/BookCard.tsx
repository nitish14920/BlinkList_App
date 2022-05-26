import React from "react";
import Grid from "@mui/material/Grid";
import { TypographyComponent } from "../../atoms/typography/TypographyComponent";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import Anchor from "../../atoms/anchor/Anchor";
import { BookCardInterface } from "../../../interfaces/interface";
import useStyles from "../../../styles/myStyles";
import { useNavigate } from "react-router-dom";
const BookCard = ({ book }: BookCardInterface) => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Grid
      data-testid="bookCardTest"
      container
      width={"284px"}
      height={"466px"}
      borderRadius={"5px"}
      boxShadow="5px 10px 18px #888888"
      onClick={() => {
        navigate(`/bookDetails/${book?.id}`, { state: book });
      }}
    >
      <Grid item>
        <img
          className={classes.bookCover}
          src={book?.img}
          alt="img"
          width={"100%"}
          height={"100%"}
        />
      </Grid>
      <Grid container padding={"10px"} textAlign="left">
        <Grid item md={12}>
          <TypographyComponent variant="subtitle1">
            {book?.bookName}
          </TypographyComponent>
        </Grid>

        <Grid item md={12}>
          <TypographyComponent variant="subtitle2" color="gray">
            {book?.bookAuthor}
          </TypographyComponent>
        </Grid>

        <Grid item md={6} spacing={2}>
          <TypographyComponent variant="subtitle2" color="gray">
            <AccessTimeIcon
              sx={{
                position: "relative",
                top: "8px",
                fontSize: 20,
                marginRight: "5px",
              }}
            ></AccessTimeIcon>
            {book?.time}
          </TypographyComponent>
        </Grid>
        <Grid item md={6} spacing={2}>
          <TypographyComponent variant="subtitle2" color="gray">
            <PersonIcon
              sx={{
                position: "relative",
                top: "8px",
                fontSize: 20,
                marginRight: "5px",
              }}
            ></PersonIcon>
            {book?.reads}
          </TypographyComponent>
        </Grid>
        <Grid item md={12} textAlign="center" marginTop={2}>
          <Anchor>{book?.status}</Anchor>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BookCard;
