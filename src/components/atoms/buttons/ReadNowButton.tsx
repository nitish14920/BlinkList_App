import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { ButtonInterface } from "../../../interfaces/interface";
import { theme } from "../../../theme";
const ReadNowBotton = ({
  text,
  setFinishedReading,
  setContinueReading,
  data,
  finishedBooks,
  continueBooks,
}: ButtonInterface) => {
  const handleOnclick = () => {
    console.log(finishedBooks, data);
    const newFinishedBooks = [...continueBooks, data];
    setFinishedReading(newFinishedBooks);
  };
  return (
    <ThemeProvider theme={theme}>
      <Button variant="outlined" color="primary" onClick={handleOnclick}>
        {text}
      </Button>
    </ThemeProvider>
  );
};

export default ReadNowBotton;
