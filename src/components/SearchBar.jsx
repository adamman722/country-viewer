import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

function SearchBar() {
  const countries = useSelector((state) => state.countries.value);
  const SearchBox = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 300px;
    margin-top: 30px;
    padding: 15px;
    display: flex;
    gap: 15px;
    opacity: 0.6;
    border-radius: 10px;
  `;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <SearchBox>
        <i class="fa-solid fa-magnifying-glass"></i>
        <Autocomplete
          sx={{
            display: "inline-block",
            "& input": {
              width: 200,
              bgcolor: "white",
              border: "none",
            },
          }}
          options={countries.country}
          renderInput={(params) => (
            <div ref={params.InputProps.ref}>
              <input
                type="text"
                {...params.inputProps}
                placeholder="Search for a country..."
              />
            </div>
          )}
        />
      </SearchBox>
    </div>
  );
}

export default SearchBar;
