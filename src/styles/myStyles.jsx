import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  bookList: {
    width: "80vw",
    margin: "auto",

    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    "& > div": {
      margin: "20px",
    },
  },
  bookCover: {
    borderRadius: "5px",
  },
  underLinedButoon: {
    "& button": {
      border: "none",
      borderBottom: "2px solid gray",
      backgroundColor: "white",
      width: "250px",
      textAlign: "left",
      fontSize: "20px",
      height: "50px",

      "&:hover": {
        color: "#22C870",
        borderBottom: "2px solid #22C870",
      },
    },
    textAlign: "left",
  },
  underLinedButtonContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "4.5%",
    marginBottom: "5%",
  },
  underLinedButoonForBookDetails: {
    "& button": {
      border: "none",
      borderBottom: "1px solid gray",
      backgroundColor: "white",
      width: "200px",
      textAlign: "left",
      fontSize: "15px",
      height: "40px",

      "&:hover": {
        borderBottom: "2px solid #22C870",
      },
    },
    textAlign: "left",
  },
  underLinedButoonForExplore: {
    "& button": {
      border: "none",
      borderBottom: "1px solid gray",
      backgroundColor: "#F1F6F4",
      width: "300px",
      textAlign: "left",
      fontSize: "15px",
      height: "40px",

      "&:hover": {
        borderBottom: "2px solid #22C870",
      },
    },
  },
  searchBar: {
    "& input": {
      width: "40vw",
      height: "50px",
      border: "none",
    },
    display: "flex",
    border: "none",
    width: "40vw",
    margin: "auto",
    borderBottom: "2px solid gray",
  },
});

export default useStyles;
