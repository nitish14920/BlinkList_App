import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

import { ButtonInterface } from "../../../../interfaces/interface";
import { theme } from "../../../../theme";
const ReadNowBotton = ({
  text,
  setFinishedReading,
  setContinueReading,
  data,
  finishedBooks,
  continueBooks,
}: ButtonInterface) => {
  const navigate = useNavigate();
  async function handleOnclick() {
    console.log(finishedBooks, data);

    var arr = continueBooks.filter((book) => book.id == data?.id);
    if (arr.length >= 1) {
      return;
    }
    const newContinueBooks = [...continueBooks, { ...data, status: "Reading" }];
    var newFinishedBooks = finishedBooks.filter((book) => book.id !== data?.id);

    try {
      const response = await axios.delete(
        `http://localhost:8000/finishedReading/${data?.id}`
      );
      console.log(response.data);
      setFinishedReading(newFinishedBooks);
    } catch (error) {
      console.error(error);
    }
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/continueReading",
        data: {
          ...data,
          status: "Reading",
        },
      });
      console.log(response.data);
      setContinueReading(newContinueBooks);
    } catch (error) {
      console.error(error);
    }
    navigate("/");
  }
  return (
    <ThemeProvider theme={theme}>
      <Button variant="outlined" color="primary" onClick={handleOnclick}>
        {text}
      </Button>
    </ThemeProvider>
  );
};

export default ReadNowBotton;
