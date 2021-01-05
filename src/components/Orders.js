import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders({ state }) {
  const classes = useStyles();
  const current = state.searches[state.currentSearch] || null;
  const allResolved =
    current &&
    current.queryString &&
    (current.youTube.status === "resolved" ||
      current.youTube.status === "skip") &&
    (current.bing.status === "resolved" || current.bing.status === "skip") &&
    (current.vimeo.status === "resolved" || current.vimeo.status === "skip");

  if (!allResolved) return null
  return (
    <React.Fragment>
      <Title>Recent Searches</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Search Term</TableCell>
            <TableCell>Youtube</TableCell>
            <TableCell>Bing</TableCell>
            <TableCell align="right">Vimeo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.searches.map((row) => {
            const date = row.vimeo.stats.requestStarted;
            return (
              <TableRow key={date}>
                <TableCell>{date}</TableCell>
                <TableCell>{row.queryString}</TableCell>
                <TableCell>{row.youTube.data.results}</TableCell>
                <TableCell>{row.bing.data.totalEstimatedMatches}</TableCell>
                <TableCell align="right">{row.vimeo.data.total}</TableCell>
              </TableRow>
            );
          })}

        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
