import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { demoVideoUrl } from "../material/constants";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = (e) => {
  const snippet = e.video.snippet;
  const channelDescription = snippet.channelTitle;
  const id = e.video.id.videoId;
  const image = snippet.thumbnails.high.url;
  const title = snippet.title;

  return (
    <Card
      sx={{ width: { md: "260px", xs: "100%" }, height: { md: "290px" } }}
      className="media"
    >
      <Link to={id ? `/video/${id}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={image}
          alt="green iguana"
          className="media1"
          sx={{
            width: { xs: 340, md: 300 },
            height: { xs: 150, md: 150 },
          }}
          s
        />
      </Link>

      <CardContent
        sx={{
          backgroundColor: "#201E20",
          width: { md: 280, xs: "100%" },
          height: { xs: 100 },
          //   border: "1px solid red",
          //   pt: "-4rem",
        }}
      >
        <Link
          to={id ? `/video/${id}` : demoVideoUrl}
          style={{ textDecoration: "none" }}
        >
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            sx={{ color: "white" }}
          >
            {title.slice(0, 30)}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="div"
            sx={{ color: "white" }}
          >
            {channelDescription.slice(0, 33)}
            <span>
              <CheckCircle
                sx={{ fontSize: 15, color: "grey", marginLeft: "0.3rem" }}
              />
            </span>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
