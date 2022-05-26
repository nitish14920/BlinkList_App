import Grid from "@mui/material/Grid";
import React from "react";
import BookCard from "../../molecules/bookCard/BookCard";
import ExploreBooksOnEntrepreneurship from "../../molecules/exploreBookOnEntrepreneurship/ExploreBooksOnEntrepreneurship";
import NavBar from "../../molecules/navBar/NavBar";
import SearchBar from "../../molecules/searchBar/SearchBar";
interface BookProp {
  books: object[];
}
const EntrepreneurshipBooksPage = ({ books }: BookProp) => {
  const entrepreneurshipBooks = books.map((book) => (
    <Grid item md={4}>
      <BookCard book={book} />
    </Grid>
  ));
  return (
    <Grid container>
      <NavBar></NavBar>
      <Grid container margin="auto" width="70vw">
        <Grid item md={12}>
          <ExploreBooksOnEntrepreneurship></ExploreBooksOnEntrepreneurship>
        </Grid>
        <Grid item md={12}>
          <SearchBar></SearchBar>
        </Grid>
        <Grid container position={"relative"} top={"50px"} spacing={3}>
          {entrepreneurshipBooks}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EntrepreneurshipBooksPage;
