import { ThemeProvider } from "@mui/material";
import Grid from "@mui/material/Grid";
import theme from "../../../theme";
import useStyles from "../../../styles/myStyles";
import BookCard from "../../molecules/bookCard/BookCard";
interface ContinueReadingProp {
  continueReading: object[];
}
const CurrentlyReading = ({ continueReading }: ContinueReadingProp) => {
  const classes = useStyles();

  const books = continueReading.map((book) => (
    <Grid item md={3}>
      <BookCard book={book} />
    </Grid>
  ));

  return (
    <ThemeProvider theme={theme}>
      <Grid
        data-testid="currentlyReadingTest"
        container
        className={classes.bookList}
      >
        {books}
      </Grid>
    </ThemeProvider>
  );
};

export default CurrentlyReading;
