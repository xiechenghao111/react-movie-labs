import React from "react";
import TVHeader from "../headerPeople";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getTVImage } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
const TemplateTVPage = ({ TV, children }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: TV.id }],
    getTVImage
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.posters

  return (
    <>
      <TVHeader TV={TV} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList 
                cols={1}>
                {images.map((image) => (
                    <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.posters}
                    />
                    </ImageListItem>
                ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateTVPage;