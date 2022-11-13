import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import NavigationIcon from "@mui/icons-material/Navigation";
import Drawer from "@mui/material/Drawer";

import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import PeopleReviews from "../peopleReviews";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};


const PeopleDetails = ({ people }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {people.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        
      
      </Paper>
      <Paper component="ul" sx={{...root}}>
        
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <PeopleReviews movie={people} />
      </Drawer>
      </>
  );
};
export default PeopleDetails ;