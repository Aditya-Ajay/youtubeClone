import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChannelDetails, Feed, Search, VideoDetails } from "./components";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000000" }} className="width">
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchItem" element={<Search />} />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
