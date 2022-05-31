import Grid from "@mui/material/Grid";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import FiberSmartRecordOutlinedIcon from "@mui/icons-material/FiberSmartRecordOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import ModeStandbyOutlinedIcon from "@mui/icons-material/ModeStandbyOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import useStyle from "../../../../styles/myStyles";
import { TypographyComponent } from "../../../atoms/typography/TypographyComponent";
interface ExploreInrterface {
  display?: string;
}
const Explore = ({ display }: ExploreInrterface) => {
  const classes = useStyle();
  const navigate = useNavigate();
  const list = [
    {
      name: "Entrepreneurship",
      comp: <RocketLaunchOutlinedIcon fontSize="small" />,
    },
    {
      name: "Politics",
      comp: <AccountBalanceOutlinedIcon fontSize="small" />,
    },
    {
      name: "Marketing & Sales",
      comp: <AutoGraphOutlinedIcon fontSize="small" />,
    },
    {
      name: "Science",
      comp: <ScienceOutlinedIcon fontSize="small" />,
    },
    {
      name: "Health & Nutrition",
      comp: <LocalHospitalOutlinedIcon fontSize="small" />,
    },
    {
      name: "Personal Development",
      comp: <SignalCellularAltOutlinedIcon fontSize="small" />,
    },
    {
      name: "Economics",
      comp: <FiberSmartRecordOutlinedIcon fontSize="small" />,
    },
    { name: "History", comp: <PublicOutlinedIcon fontSize="small" /> },
    {
      name: "Communication Skills",
      comp: <CommentOutlinedIcon fontSize="small" />,
    },
    {
      name: "Corporate Culture",
      comp: <BusinessCenterOutlinedIcon fontSize="small" />,
    },
    {
      name: "Motivation & Inspiration",
      comp: <TipsAndUpdatesOutlinedIcon fontSize="small" />,
    },
    {
      name: "Money & Investments",
      comp: <AccountBalanceWalletOutlinedIcon fontSize="small" />,
    },
    {
      name: "Psychology",
      comp: <PsychologyOutlinedIcon fontSize="small" />,
    },
    {
      name: "Productivity",
      comp: <HourglassBottomOutlinedIcon fontSize="small" />,
    },
    {
      name: "Sex & Relationship",
      comp: <FavoriteBorderOutlinedIcon fontSize="small" />,
    },
    {
      name: "Nature & Environment",
      comp: <YardOutlinedIcon fontSize="small" />,
    },
    {
      name: "Career & Success",
      comp: <ModeStandbyOutlinedIcon fontSize="small" />,
    },
    {
      name: "Education",
      comp: <SchoolOutlinedIcon fontSize="small" />,
    },
  ];

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Grid
      container
      zIndex={2}
      display={display}
      height={"150%"}
      width={"100%"}
      position={"absolute"}
      right={"0%"}
      top={"100px"}
    >
      <Grid
        container
        bgcolor={"#F1F6F4"}
        data-testid="exploreTest"
        height={"398px"}
      >
        <Grid container sx={{ width: "65vw", margin: "auto" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Explore by category" value="1" />
                <Tab label="See recently added titles" value="2" />
                <Tab label="See popular titles" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Grid
                container
                sx={{ width: "65vw", margin: "auto", marginTop: "20px" }}
              >
                {list.map((e) => (
                  <Grid
                    item
                    md={4}
                    display={"flex"}
                    marginBottom={"10px"}
                    onClick={() => {
                      navigate("/entrepreneurshipBooks");
                    }}
                    className={classes.exploreItems}
                  >
                    {e.comp}
                    <TypographyComponent
                      color="#6D787E"
                      variant="subtitle2"
                      marginLeft="10px"
                      className={classes.exploreItems}
                    >
                      {e.name}
                    </TypographyComponent>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value="2">
              <Grid container></Grid>
            </TabPanel>
            <TabPanel value="3">
              <Grid container></Grid>
            </TabPanel>
          </TabContext>
        </Grid>
      </Grid>
      <Grid
        container
        bgcolor={"#9DA3A6"}
        height={"100%"}
        sx={{ opacity: "45%" }}
      ></Grid>
    </Grid>
  );
};

export default Explore;
