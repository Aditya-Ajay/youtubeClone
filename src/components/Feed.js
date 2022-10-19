import React, { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar } from ".";
import { categories } from "../material/constants";
import { Video } from "./index";
import { useState } from "react";
import { fetchFromAPI } from "../material/fetchData";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [video, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack direction={{ sm: "column", md: "row", lg: "row" }}>
      <Box
        sx={{
          // border: "2px solid red",
          height: { sx: "auto", md: "auto" },
          borderRight: "1px solid red",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box ml="1rem">
        <Typography variant="h4" sx={{ mb: "2rem" }}>
          <div style={{ color: "white", marginTop: "1rem" }}>
            {selectedCategory}
            <span style={{ color: "red", marginLeft: "10px" }}>Video</span>
          </div>
        </Typography>
        <Video videos={video} />
      </Box>
    </Stack>
  );
};

export default Feed;
