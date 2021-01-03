import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Search } from "@material-ui/icons";
import { SearchBar } from "material-ui-search-bar";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  search: {
    flexGrow: 1,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchInput(props) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = React.useState("");

  //  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("DO IT");
    // onSubmit(searchTerm);
  }

  return (
    <div className={classes.search}>
      {/* <div className={classes.searchIcon}>
        <SearchIcon />
      </div> */}
      {/* <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        autoFocus={true}
        inputProps={{ "aria-label": "search" }}
        value={searchTerm}
        onChange={handleChange}
      />
      <button
        className="search_submit"
        aria-label="submit search"
        type="submit"
        disabled={!searchTerm.length}
      >
        search
      </button> */}
      <form  noValidate autoComplete="off">
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
        />
      </form>
    </div>
  );
}
