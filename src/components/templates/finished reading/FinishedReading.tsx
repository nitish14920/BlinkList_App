import Grid from "@mui/material/Grid";

import useStyles from "../../../styles/myStyles";
import BookCard from "../../molecules/bookCard/BookCard";
interface FinishedReadingProp {
  finishedReading: object[];
}
const FinishedReading = ({ finishedReading }: FinishedReadingProp) => {
  const classes = useStyles();

  const books = finishedReading.map((book) => (
    <Grid item md={3}>
      <BookCard book={book} />
    </Grid>
  ));

  return (
    <Grid
      data-testid="finishedReadingTest"
      container
      className={classes.bookList}
    >
      {books}
    </Grid>
  );
};

export default FinishedReading;
