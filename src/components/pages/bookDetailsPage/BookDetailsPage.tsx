import Grid from "@mui/material/Grid";
import React from "react";
import BookDetails from "../../molecules/bookDetails/BookDetails";
import Footer from "../../molecules/footer/Footer";
import NavBar from "../../molecules/navBar/NavBar";
import { useLocation } from "react-router-dom";
import { BookInterface } from "../../atoms/buttons/FinishedReadingButton";
interface DataProp {
  data?: any;
  setContinueReading?: any;
  setFinishedReading?: any;
  finishedBooks: BookInterface[];
  continueBooks: BookInterface[];
}
const BookDetailsPage = ({
  setContinueReading,
  setFinishedReading,
  finishedBooks,
  continueBooks,
}: DataProp) => {
  const location = useLocation();
  console.log(location);
  return (
    <Grid container>
      <NavBar></NavBar>
      <BookDetails
        data={location}
        setContinueReading={setContinueReading}
        setFinishedReading={setFinishedReading}
        continueBooks={continueBooks}
        finishedBooks={finishedBooks}
      ></BookDetails>
      <Footer></Footer>
    </Grid>
  );
};

export default BookDetailsPage;
