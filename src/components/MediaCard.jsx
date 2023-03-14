import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import Rating from "@mui/material/Rating";

import { useEffect } from "react";

export default function MediaCard({
  name,
  image,
  summary,
  rating,
  genres,
  runtime,
  premiered,
  url,
}) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const [value, setValue] = React.useState(0);
  useEffect(() => {
    setValue(rating / 2);
  });
  const showRating = () => {
    if (rating) {
      return (
        <ListItem>
          <Typography component="legend">Rating</Typography>
          <Rating name="read-only" value={value} readOnly precision={0.5} />
        </ListItem>
      );
    } else
      return (
        <ListItem>
          <ListItemText
            primary={`No rating found`}
            secondary={secondary ? "Secondary text" : null}
          />
        </ListItem>
      );
  };

  return (
    <Card sx={{ maxWidth: 445 }} className={"card"}>
      <CardMedia sx={{ height: 350 }} image={image} title="tv show" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">{summary}</Typography>
      </CardContent>
      <List dense={dense}>
        {showRating()}
        <ListItem>
          <ListItemText
            primary={
              genres.length === 0 ? "No genres found!" : `Genres: ${genres}`
            }
            secondary={secondary ? "Secondary text" : null}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              runtime ? `Runtime: ${runtime} minutes` : "No runtime found!"
            }
            secondary={secondary ? "Secondary text" : null}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              premiered ? `Premiered: ${premiered}` : "No premiere date found!"
            }
            secondary={secondary ? "Secondary text" : null}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={<Link href={url}>Link to {name}</Link>}
            secondary={secondary ? "Secondary text" : null}
          />
        </ListItem>
      </List>
    </Card>
  );
}
