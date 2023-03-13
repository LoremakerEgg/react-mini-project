import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSlotProps } from "@mui/base";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { TextField } from "@mui/material";

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
  // const tvShowArray = Object.values(tvShow);

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 445 }}>
      <CardMedia sx={{ height: 350 }} image={image} title="yellow lizard" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <List dense={dense}>
        <ListItem>
          <ListItemText
            primary={`Rating: ${rating}`}
            secondary={secondary ? "Secondary text" : null}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`Genres: ${genres}`}
            secondary={secondary ? "Secondary text" : null}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`Runtime: ${runtime}`}
            secondary={secondary ? "Secondary text" : null}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`Premiered: ${premiered}`}
            secondary={secondary ? "Secondary text" : null}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`Url: ${url}`}
            secondary={secondary ? "Secondary text" : null}
          />
        </ListItem>
      </List>
      <CardActions>
        <Button
          size="small"
          onClick={() => console.log("Click on share button ")}
        >
          Share
        </Button>
        <Button
          size="small"
          onClick={() => console.log("Click on Learn more button ")}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
