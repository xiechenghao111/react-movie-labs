import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

import { excerpt } from "../../util";
import { getPeopledetail } from "../../api/tmdb-api";

export default function PeopleReviews({ people }) {
  const [biography, setBiography] = useState([]);

  useEffect(() => {
    getPeopledetail(people.id).then((biography) => {
      setBiography(biography);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="biology table">
        <TableHead>
          <TableRow>
            <TableCell >Author</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {biography.map((b) => (
            <TableRow key={b.id}>
              <TableCell component="th" scope="row">
                {b.author}
              </TableCell>
              <TableCell >{excerpt(b.content)}</TableCell>
              <TableCell >
              <Link
                  to={`/biography/${b.id}`}
                  state={{
                      biography: b,
                      people: people,
                  }}
                >
                  Full Biography
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}