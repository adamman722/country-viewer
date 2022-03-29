import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { keyframes } from "styled-components";

function SearchBar() {
  const countries = useSelector((state) => state.countries.value);
  const dispatch = useDispatch();
  //start of filter dropdown
  const [selectFilter, setSelectFilter] = useState("Filter by Region");
  const [showDropDown, setShowDropDown] = useState(false);
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
  const FilterBox = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 300px;
    margin-top: 30px;
    padding: 15px;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    border-radius: 10px;
  `;

  const slideIn = keyframes`
from{
  margin-top: -30px;
  opacity: .0;
}
to{
  margin-top: 0px;
  opacity: 1;
}
  `;
  const ListBox = styled.div`
    animation: ${slideIn} 0.5s forwards;
  `;
  const FancyList = styled.ul`
    list-style: none;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 300px;
    margin-top: 10px;
    padding: 15px;
    border-radius: 10px;
  `;
  const dropDown = (
    <ListBox className="drop-down">
      <FancyList>
        <li>All</li>
        <li>Africa</li>
        <li>America</li>
        <li>Asia</li>
        <li>Europe</li>
        <li>Oceania</li>
      </FancyList>
    </ListBox>
  );

  function handleDropDown() {
    setShowDropDown(!showDropDown);
  }
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
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
      <div className="filter-dropdown">
        <FilterBox className="select-box" onClick={handleDropDown}>
          <span>{selectFilter}</span>
          <i className="fa-solid fa-chevron-down"></i>
        </FilterBox>
      </div>
      {showDropDown ? dropDown : null}
    </div>
  );
}

export default SearchBar;
