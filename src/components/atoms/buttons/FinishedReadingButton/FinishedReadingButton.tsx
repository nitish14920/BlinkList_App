import Button from "@mui/material/Button";
import React from "react";
import { ButtonInterface } from "../../../../interfaces/interface";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "../../../../theme";
import axios from "axios";
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
  var disabled = false;
  var arr = finishedBooks.filter((book) => book.id === data?.id);
  if (arr.length >= 1) {
    disabled = true;
  }
  async function handleOnclick() {
    console.log(finishedBooks, data);

    var arr = finishedBooks.filter((book) => book.id === data?.id);
    if (arr.length >= 1) {
      return;
    }
    const newFinishedBooks = [
      ...finishedBooks,
      { ...data, status: "Finished" },
    ];
    var newContinueBooks = continueBooks.filter((book) => book.id !== data?.id);

    try {
      const response = await axios.delete(
        `http://localhost:8000/continueReading/${data?.id}`
      );
      console.log(response.data);
      setContinueReading(newContinueBooks);
    } catch (error) {
      console.error(error);
    }
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/finishedReading",
        data: {
          ...data,
          status: "Finished",
        },
      });
      console.log(response.data);
      setFinishedReading(newFinishedBooks);
    } catch (error) {
      console.error(error);
    }
    navigate("/");
  }
  return (
    <Button
      data-testid="finishedReadingButtonTest"
      variant="contained"
      color="primary"
      onClick={handleOnclick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default FinishedReadingButton;
