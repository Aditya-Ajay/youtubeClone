import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { demoVideoUrl } from "../material/constants";
import { CheckCircle } from "@mui/icons-material";
const ChannelCard = ({ channel }) => {
  const channelId = channel.snippet.channelId;
  // console.log(channelId);
  const channelImage = channel.snippet.thumbnails.high.url;
  // console.log(channelImage);

  return (
    <div>
      <Card
        sx={{
          width: { md: "260px", xs: "100%" },
          backgroundColor: "black",
        }}
      >
        <Link to={`/channel/${channelId}`}>
          <CardMedia
            component="img"
            image={channelImage}
            alt="green iguana"
            sx={{
              borderRadius: "8rem",
              backgroundColor: "black",

              height: { md: 250, xs: 240 },
            }}
          />
        </Link>
      </Card>
    </div>
  );
};
export default ChannelCard;
