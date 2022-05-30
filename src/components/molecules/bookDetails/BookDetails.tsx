import Grid from "@mui/material/Grid";
import React from "react";
import Anchor from "../../atoms/anchor/Anchor";
import FinishedReadingButton, {
  BookInterface,
} from "../../atoms/buttons/FinishedReadingButton/FinishedReadingButton";
import ReadNowButton from "../../atoms/buttons/ReadNowButton/ReadNowButton";
import { TypographyComponent } from "../../atoms/typography/TypographyComponent";
import UnderLinedButton from "../../atoms/underLinedButton/UnderLinedButton";
import useStyles from "../../../styles/myStyles";
import { ThemeProvider } from "@mui/material";
import { theme } from "./../../../theme";

interface DataProp {
  data?: any;
  setContinueReading?: any;
  setFinishedReading?: any;
  finishedBooks: BookInterface[];
  continueBooks: BookInterface[];
}
const BookDetails = ({
  data,
  setContinueReading,
  setFinishedReading,
  finishedBooks,
  continueBooks,
}: DataProp) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container height={"70vh"} width={"70%"} margin={"auto"}>
        <Grid container width={"70%"} height={"250px"}>
          <Grid item md={12}>
            <TypographyComponent variant="subtitle2">
              Get the Key ideas from
            </TypographyComponent>
          </Grid>
          <Grid item md={12}>
            <TypographyComponent variant="h3">
              {data?.state.bookName}
            </TypographyComponent>
          </Grid>
          <Grid item md={12}>
            <TypographyComponent variant="h6">
              Turning Your Business into an Enduring Great Company
            </TypographyComponent>
          </Grid>
          <Grid item md={12}>
            <TypographyComponent variant="subtitle2">
              {data?.state.bookAuthor}
            </TypographyComponent>
          </Grid>
          <Grid item md={12}>
            <TypographyComponent variant="subtitle2">
              {data?.state.time}
            </TypographyComponent>
          </Grid>
        </Grid>
        <Grid
          container
          width={"30%"}
          height={"304px"}
          position={"relative"}
          top={"40px"}
        >
          <img src={`/${data?.state.img}`} alt="img" />
        </Grid>
        <Grid container width={"500px"} spacing="20">
          <Grid item>
            <ReadNowButton
              setFinishedReading={setFinishedReading}
              setContinueReading={setContinueReading}
              finishedBooks={finishedBooks}
              continueBooks={continueBooks}
              data={data?.state}
              text="Read Now"
            ></ReadNowButton>
          </Grid>
          <Grid item>
            <FinishedReadingButton
              setFinishedReading={setFinishedReading}
              setContinueReading={setContinueReading}
              finishedBooks={finishedBooks}
              continueBooks={continueBooks}
              text="Finished Reading"
              data={data?.state}
            ></FinishedReadingButton>
          </Grid>
          <Grid item>
            <Anchor sx={{ color: "gray", lineHeight: "2" }}>
              Send to Kindle
            </Anchor>
          </Grid>
        </Grid>
        <Grid container>
          <UnderLinedButton
            className={classes.underLinedButoonForBookDetails}
            text1="Synopsis"
          ></UnderLinedButton>
          <UnderLinedButton
            className={classes.underLinedButoonForBookDetails}
            text1="Who is it For?"
          ></UnderLinedButton>
          <UnderLinedButton
            className={classes.underLinedButoonForBookDetails}
            text1="About the Author"
          ></UnderLinedButton>
        </Grid>
        <TypographyComponent
          variant="subtitle2"
          width="600px"
          marginBottom="50px"
        >
          Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill
          Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for
          the entrepreneurs, visionaries, and innovators of today. This new
          edition combines the timeless business advice and strategy of the
          original text, supplemented with cutting-edge insights and case
          studies pertinent to today’s business world.
        </TypographyComponent>
        <div style={{ height: "5px", backgroundColor: "gray" }}></div>
      </Grid>
    </ThemeProvider>
  );
};

export default BookDetails;
