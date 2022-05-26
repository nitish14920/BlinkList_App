import Button from "@mui/material/Button";
import React from "react";
import { ButtonInterface } from "../../../interfaces/interface";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./../../../theme";
export interface BookInterface {
  id: number;
  img: string;
  bookName: string;
  bookAuthor: string;
  time: string;
  reads: string;
  status: string;
  type: string;
}
const FinishedReadingButton = ({
  text,
  setFinishedReading,
  setContinueReading,
  data,
  finishedBooks,
  continueBooks,
}: ButtonInterface) => {
  const navigate = useNavigate();
  const handleOnclick = () => {
    var arr = finishedBooks.filter((book) => book.id == data?.id);
    if (arr.length >= 1) {
      return;
    }
    var newFinishedBooks = [...finishedBooks, data];
    var newContinueBooks = continueBooks.filter((book) => book.id !== data?.id);
    setContinueReading(newContinueBooks);
    setFinishedReading(newFinishedBooks);
    navigate("/");
  };
  return (
    <ThemeProvider theme={theme}>
      <Button
        data-testid="finishedReadingButtonTest"
        variant="contained"
        color="primary"
        onClick={handleOnclick}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};

export default FinishedReadingButton;
