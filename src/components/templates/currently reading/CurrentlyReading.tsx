import Grid from "@mui/material/Grid";

import useStyles from "../../../styles/myStyles";
import BookCard from "../../molecules/bookCard/BookCard";
interface ContinueReadingProp {
  continueReading: object[];
}
const CurrentlyReading = ({ continueReading }: ContinueReadingProp) => {
  const classes = useStyles();
  // const [crBooks, setcrBooks] = useState([]);

  const books = continueReading.map((book) => (
    <Grid item md={3}>
      <BookCard book={book} />
    </Grid>
  ));

  return (
    <Grid
      data-testid="currentlyReadingTest"
      container
      className={classes.bookList}
    >
      {books}
    </Grid>
  );
};

export default CurrentlyReading;
