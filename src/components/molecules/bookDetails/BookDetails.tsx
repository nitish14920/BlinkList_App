import Grid from "@mui/material/Grid";
import React from "react";
import Anchor from "../../atoms/anchor/Anchor";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FinishedReadingButton, {
  BookInterface,
} from "../../atoms/buttons/FinishedReadingButton/FinishedReadingButton";
import ReadNowButton from "../../atoms/buttons/ReadNowButton/ReadNowButton";
import { TypographyComponent } from "../../atoms/typography/TypographyComponent";
import UnderLinedButton from "../../atoms/underLinedButton/UnderLinedButton";
import useStyles from "../../../styles/myStyles";
import theme from "../../../theme";
import { ThemeProvider } from "@mui/material";

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
      <Grid container height={"70vh"} width={"940px"} margin={"auto"}>
        <Grid container width={"70%"} height={"250px"}>
          <Grid item md={12}>
            <TypographyComponent color="common.black" variant="body2">
              Get the Key ideas from
            </TypographyComponent>
          </Grid>
          <Grid item md={12}>
            <TypographyComponent color="common.black" variant="h1">
              {data?.state.bookName}
            </TypographyComponent>
          </Grid>
          <Grid item md={12}>
            <TypographyComponent
              color="common.black"
              textAlign="left"
              variant="subtitle5"
            >
              Turning Your Business into an Enduring Great Company
            </TypographyComponent>
          </Grid>
          <Grid item md={12}>
            <TypographyComponent variant="body1" color="text.secondary">
              {data?.state.bookAuthor}
            </TypographyComponent>
          </Grid>
          <Grid item md={12}>
            <TypographyComponent variant="caption" color="text.secondary">
              <AccessTimeIcon
                sx={{
                  position: "relative",
                  top: "5px",
                  fontSize: 20,
                  marginRight: "5px",
                }}
              ></AccessTimeIcon>
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
              <ArrowRightAltIcon
                sx={{
                  color: "gray",
                  lineHeight: "2",
                  position: "relative",
                  top: "5px",
                  left: "5px",
                }}
              ></ArrowRightAltIcon>
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
          variant="body2"
          width="600px"
          marginBottom="50px"
          color="common.black"
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
