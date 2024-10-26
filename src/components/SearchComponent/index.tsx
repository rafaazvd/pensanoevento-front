import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
  onSearch: (query: string) => void;
  color?: string;
}

const SearchComponent: React.FC<SearchProps> = ({
  onSearch,
  color = "#fff",
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        color: color,
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        style={{ backgroundColor: color, borderRadius: 8 }}
      />
      <IconButton
        style={{
          backgroundColor: "#0000005a",
          padding: 7,
          marginLeft: 12,
        }}
        onClick={handleSearch}
        aria-label="search"
      >
        <SearchIcon
          style={{
            color: color,
            fontSize: 43,
          }}
        />
      </IconButton>
    </Box>
  );
};

export default SearchComponent;
