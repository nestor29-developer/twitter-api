import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { DialogSlide } from "../../Dialog";

interface TwitterSearch {
  setQuery: Function;
}

export const TwitterSearch = ({ setQuery }: TwitterSearch) => {
  const [text, setTextSearch] = React.useState("");
  const [searchClicked, setSearchClicked] = React.useState(false);
  const [advancedSearch, setAdvancedSearch] = React.useState("");
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [simpleWord, setSimpleWord] = React.useState("");

  const handleInput = (e: any) => {
    setTextSearch(e.target.value);
    setQuery(e.target.value);
  };

  React.useEffect(() => {
    if (advancedSearch && advancedSearch.length > 0 && searchClicked) {
      setTextSearch(advancedSearch);
      setQuery(simpleWord + `&startTime=${startDate}&endTime=${endDate}`);
    }
  }, [advancedSearch, searchClicked]);

  return (
    <Paper
      component="form"
      sx={{
        p: "4px 4px",
        display: "flex",
        alignItems: "center",
        m: "12px",
        backgroundColor: "#F1F1F1",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Twitter"
        onChange={handleInput}
        value={text}
        style={{ fontSize: "14px" }}
        type="search"
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <DialogSlide
        setAdvancedSearch={setAdvancedSearch}
        setSearchClicked={setSearchClicked}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setSimpleWord={setSimpleWord}
      />
    </Paper>
  );
};
