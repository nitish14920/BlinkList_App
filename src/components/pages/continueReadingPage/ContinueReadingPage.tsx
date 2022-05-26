import { Container, Grid, ThemeProvider } from "@mui/material";

import UnderLinedButton from "../../atoms/underLinedButton/UnderLinedButton";
import NavBar from "../../molecules/navBar/NavBar";
import CurrentlyReading from "../../templates/currently reading/CurrentlyReading";
import useStyles from "../../../styles/myStyles";
import { TypographyComponent } from "../../atoms/typography/TypographyComponent";
import Explore from "../../molecules/explore/exploreHead/Explore";
import { useState } from "react";
import { theme } from "../../../theme";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FinishedReading from "../../templates/finished reading/FinishedReading";
interface ContinueReadingProp {
  continueReading: object[];
  finishedReading: object[];
}
const ContinueReadingPage = ({
  continueReading,
  finishedReading,
}: ContinueReadingProp) => {
  const classes = useStyles();
  const [explore, setExplore] = useState(false);
  console.log(explore);
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Container>
      <NavBar setExplore={setExplore} explore={explore}></NavBar>
      {explore ? <Explore></Explore> : <Explore display="none"></Explore>}

      <TypographyComponent
        variant="h4"
        marginLeft="6%"
        marginBottom="50px"
        fontWeight={700}
      >
        My Library
      </TypographyComponent>
      {/* <div className={classes.underLinedButtonContainer}>
        <UnderLinedButton
          className={classes.underLinedButoon}
          text1={"Continue Reading"}
        />

        <UnderLinedButton
          className={classes.underLinedButoon}
          text1={"Finished Reading"}
        />
      </div> */}
      <ThemeProvider theme={theme}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              width: "50vw",
              marginLeft: "70px",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Continue Reading" value="1" />
              <Tab label="Finished Reading" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <CurrentlyReading continueReading={continueReading} />
          </TabPanel>
          <TabPanel value="2">
            <FinishedReading
              finishedReading={finishedReading}
            ></FinishedReading>
          </TabPanel>
        </TabContext>
      </ThemeProvider>
    </Container>
  );
};

export default ContinueReadingPage;
