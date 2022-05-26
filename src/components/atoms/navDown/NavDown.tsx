import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Props } from "../../../interfaces/interface";

const NavDown = ({ sx }: Props) => {
  return (
    <KeyboardArrowDownOutlinedIcon
      data-testid="navDownTest"
      sx={sx}
    ></KeyboardArrowDownOutlinedIcon>
  );
};

export default NavDown;
