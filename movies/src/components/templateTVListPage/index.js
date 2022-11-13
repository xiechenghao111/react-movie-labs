import React from "react";
import Header from "../headerTVList";
import TVList from "../TVList";
import Grid from "@mui/material/Grid";
import AddPagination from "../pagination";

function TVListPageTemplate({ TVs, title, action }) {
  

  let displayedTV = TVs
    
  

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
       
        <TVList action={action} TVs={displayedTV}></TVList>
      </Grid>
      <AddPagination  />
    </Grid>
    
    
  );
}
export default TVListPageTemplate;