import { useEffect, useReducer, useState } from "react";
import MediaCard from "./components/MediaCard";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
function App() {
  const [url, setUrl] = useState(
    "https://api.tvmaze.com/singlesearch/shows?q=suits"
  );
  const [query, setQuery] = useState("");
  const [tvShows, setTvShows] = useState({
    name: "",
    image: "",
    summary: "",
    rating: "",
    genres: "",
    runtime: "",
    premiered: "",
    url: "",
  });
  console.log(tvShows);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const onSearch = () => {
    setUrl(`https://api.tvmaze.com/singlesearch/shows?q=${query}`);
    setQuery("");
  };

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTvShows({
      ...tvShows,
      name: data.name,
      image: data.image.original,
      summary: data.summary,
      rating: data.rating.average,
      genres: [...data.genres],
      runtime: data.runtime,
      premiered: data.premiered,
      url: data.url,
    });
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <Container maxWidth="sm">
      <div className="App">
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={query}
          onChange={handleSearch}
        />
        <Button size="large" onClick={onSearch}>
          Click on me!
        </Button>
        <MediaCard
          image={tvShows.image}
          name={tvShows.name}
          summary={tvShows.summary}
          rating={tvShows.rating}
          genres={tvShows.genres}
          runtime={tvShows.runtime}
          premiered={tvShows.premiered}
          url={tvShows.url}
        />
      </div>
    </Container>
  );
}

export default App;
