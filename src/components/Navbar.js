import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../material/constants";
import { SearchBar } from ".";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      position="sticky"
      p={2}
      sx={{
        // border: "1px solid red",
        backgroundColor: "#000000",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <img
          src={logo}
          alt="YoutubeIcon"
          style={{ height: "45px", display: "flex" }}
        />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
