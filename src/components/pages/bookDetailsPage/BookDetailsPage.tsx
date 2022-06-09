import Grid from "@mui/material/Grid";
import React from "react";
import BookDetails from "../../molecules/bookDetails/BookDetails";
import Footer from "../../molecules/footer/Footer";
import NavBar from "../../molecules/navBar/NavBar";
import { useLocation } from "react-router-dom";
import { BookInterface } from "../../atoms/buttons/FinishedReadingButton/FinishedReadingButton";
interface DataProp {
  data?: any;
  setContinueReading?: any;
  setFinishedReading?: any;
  finishedBooks: BookInterface[];
  continueBooks: BookInterface[];
  isAuthenticated: boolean;
  explore: boolean;
  setExplore?: Function;
}

const BookDetailsPage = ({
  setContinueReading,
  setFinishedReading,
  finishedBooks,
  continueBooks,
  isAuthenticated,
  explore,
  setExplore,
}: DataProp) => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Grid container width={"940px"} margin={"auto"}>
        <NavBar
          setExplore={setExplore}
          explore={explore}
          isAuthenticated={isAuthenticated}
        ></NavBar>
        <BookDetails
          data={location}
          setContinueReading={setContinueReading}
          setFinishedReading={setFinishedReading}
          continueBooks={continueBooks}
          finishedBooks={finishedBooks}
        ></BookDetails>
      </Grid>
      <Footer></Footer>
    </>
  );
};

export default BookDetailsPage;
