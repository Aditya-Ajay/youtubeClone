import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { Video } from "./";
import { fetchFromAPI } from "../material/fetchData";

const ChannelDetail = () => {
  const [videos, setVideo] = useState([]);
  console.log(videos);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideo(data.items)
    );
  }, [id]);
  return (
    <div>
      <Box sx={{ backgroundColor: "black" }}>
        <Box
          sx={{
            backgroundImage: "linear-gradient(red, black)",
            height: "40vh",
            marginTop: "3rem",
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s900-c-k-c0x00ffffff-no-rj"
            alt="Js Mastery"
            style={{
              height: "100px",
              borderRadius: "10rem",
            }}
          />
        </Box>
        <Box
          mt="1rem"
          display="flex"
          p="2"
          sx={{
            ml: { xs: "1.5rem", sm: "0rem", md: "7rem" },
            backgrounColor: "black",
          }}
        >
          <Box>
            <Video videos={videos} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ChannelDetail;
