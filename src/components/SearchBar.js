import React from "react";
import { Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const Navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchItem) {
      Navigate(`search/${searchItem}`);
    }
    setSearchItem("");
  };
  const [searchItem, setSearchItem] = useState("");
  return (
    <Paper
      component="form"
      className="styling"
      onSubmit={handleSubmit}
      sx={{
        pl: "1rem",
        pr: "3rem",
        // pt: "0.3rem",
        // pb: "0.3rem",
        borderRadius: "1rem",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        type="text"
        name="SearchItem"
        value={searchItem}
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />

      <IconButton>
        <SearchIcon className="search" sx={{ color: "red" }} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
