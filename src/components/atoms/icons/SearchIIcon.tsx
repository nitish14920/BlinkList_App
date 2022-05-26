import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Props } from "../../../interfaces/interface";

const SearchIIcon = ({ sx }: Props) => {
  return <SearchIcon data-testid="navBarSearchTest" sx={sx} />;
};

export default SearchIIcon;
