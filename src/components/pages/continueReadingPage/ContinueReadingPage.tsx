import { Container, Grid, ThemeProvider } from "@mui/material";

import NavBar from "../../molecules/navBar/NavBar";
import CurrentlyReading from "../../templates/currently reading/CurrentlyReading";

import { TypographyComponent } from "../../atoms/typography/TypographyComponent";
import Explore from "../../molecules/explore/exploreHead/Explore";
import { useState } from "react";
import theme from "../../../theme";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FinishedReading from "../../templates/finished reading/FinishedReading";

interface ContinueReadingProp {
  continueReading: object[];
  finishedReading: object[];
  isAuthenticated: boolean;
  explore: boolean;
  setExplore?: Function;
}
const ContinueReadingPage = ({
  continueReading,
  finishedReading,
  isAuthenticated,
  explore,
  setExplore,
}: ContinueReadingProp) => {
  const [value, setValue] = useState("1");
  console.log("isAuthenticated" + isAuthenticated);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavBar
          setExplore={setExplore}
          explore={explore}
          isAuthenticated={isAuthenticated}
        ></NavBar>
        {explore ? (
          <Explore setExplore={setExplore}></Explore>
        ) : (
          <Explore display="none"></Explore>
        )}
        {isAuthenticated ? (
          <>
            <TypographyComponent
              variant="h1"
              marginLeft="5%"
              marginBottom="50px"
              fontWeight={700}
              color="common.black"
            >
              My Library
            </TypographyComponent>

            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  width: "50vw",
                  marginLeft: "55px",
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
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
          </>
        ) : null}
      </Container>
    </ThemeProvider>
  );
};

export default ContinueReadingPage;
