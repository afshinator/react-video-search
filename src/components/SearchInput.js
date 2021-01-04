import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Search } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
    flexGrow: 1,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    padding: 6,
  },
  searchInput: {
    flex: 1,
  },
  searchIcon: {
    marginRight: 10,
    marginLeft: 10
  }
}));

export default function SearchInput({handleSubmitSearch}) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = React.useState("");
  const theme = useTheme();
  //  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("DO IT");
    handleSubmitSearch(searchTerm)
    // onSubmit(searchTerm);
  }

  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.search}
      onSubmit={handleSubmit}
    >
      <TextField
        className={classes.searchInput}
        id="search-input"
        label="Enter your search term"
        type="search"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
      />
      <IconButton
        type="submit"
        className={classes.searchIcon}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </form>
  );
}
