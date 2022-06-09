import { ThemeProvider } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { BookInterface } from "../../atoms/buttons/FinishedReadingButton/FinishedReadingButton";
import { TypographyComponent } from "../../atoms/typography/TypographyComponent";
import BookCard from "../../molecules/bookCard/BookCard";
import ExploreBooksOnEntrepreneurship from "../../molecules/exploreBookOnEntrepreneurship/ExploreBooksOnEntrepreneurship";
import NavBar from "../../molecules/navBar/NavBar";
import SearchBar from "../../molecules/searchBar/SearchBar";
import theme from "../../../theme";
interface BookProp {
  books: BookInterface[];
  isAuthenticated: boolean;
  explore: boolean;
  setExplore?: Function;
}
const EntrepreneurshipBooksPage = ({
  books,
  isAuthenticated,
  explore,
  setExplore,
}: BookProp) => {
  const [searchedWord, setSearchedWord] = useState("");
  if (searchedWord !== "") {
    books = books.filter((book) =>
      book.bookName.toLowerCase().includes(searchedWord.toLowerCase())
    );
  }

  const entrepreneurshipBooks = books.map((book) => (
    <Grid item md={4}>
      <BookCard book={book} />
    </Grid>
  ));

  return (
    <ThemeProvider theme={theme}>
      <Grid container width={"940px"} margin={"auto"}>
        <NavBar
          setExplore={setExplore}
          explore={explore}
          isAuthenticated={isAuthenticated}
        ></NavBar>
        <Grid
          container
          margin="auto"
          position={"relative"}
          right="20px"
          width="70vw"
        >
          <Grid item md={12}>
            <ExploreBooksOnEntrepreneurship></ExploreBooksOnEntrepreneurship>
          </Grid>
          <Grid item md={12}>
            <SearchBar setSearchedWord={setSearchedWord}></SearchBar>
          </Grid>
          <Grid item md={12}>
            <TypographyComponent color="commom.black" variant="h3">
              Trending blinks
            </TypographyComponent>
          </Grid>
          <Grid container position={"relative"} top={"50px"} spacing={3}>
            {entrepreneurshipBooks}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default EntrepreneurshipBooksPage;
