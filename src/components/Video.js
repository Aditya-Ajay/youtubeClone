import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, ChannelDetails } from ".";
const Video = ({ videos }) => {
  //   console.log(videos.video.id.channelId);
  return (
    <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="start">
      {videos.map((e, idx) => (
        <Box key={idx}>
          {e.id.videoId && <VideoCard video={e} />}
          {e.id.channelId && <ChannelCard channel={e} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Video;
