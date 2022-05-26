import React from "react";
import useStyles from "../../../styles/myStyles";
import SearchIIcon from "../../atoms/icons/SearchIIcon";
const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.searchBar} data-testid="searchBarTest">
      <SearchIIcon
        sx={{
          position: "relative",
          top: "15px",
          fontSize: 35,
          marginRight: "20px",
        }}
      ></SearchIIcon>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search by Title or Author"
      />
    </div>
  );
};

export default SearchBar;
