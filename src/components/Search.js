import React from "react";
import { Video } from "./index";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../material/fetchData";
import { Box, Stack, Typography } from "@mui/material";
const Search = () => {
  const [video, setVideos] = useState([]);
  const { searchItem } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchItem}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchItem]);
  return (
    <div>
      <Box ml="1rem">
        <Typography variant="h4" sx={{ mb: "2rem" }}>
          <div style={{ color: "white", marginTop: "1rem" }}>
            {searchItem}
            <span style={{ color: "red", marginLeft: "10px" }}>Video</span>
          </div>
        </Typography>
        <Video videos={video} />
      </Box>
    </div>
  );
};

export default Search;
