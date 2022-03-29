import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import "../fontawesome-free-6.1.1-web/css/all.css";
import axios from "axios";
import { useDispatch } from "react-redux";

function CountryMainDisplay() {
  const dispatch = useDispatch();

  const NavBar = styled.nav`
    display: flex;

    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 20px 20px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 9px -1px;
  `;
  const ModeSwitcher = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    i {
      font-size: 14px;
    }
    span {
      font-size: 14px;
    }
  `;
  const [darkMode, setDarkMode] = useState(false);

  // async function getDataFromAPI() {
  //   const url = "https://restcountries.com/v3.1/all";
  //   await axios.get(url).then((res) => {
  //     const { data } = res;
  //     data.map((country) => {
  //       // const {
  //       //   capital,
  //       //   continents,
  //       //   currencies,
  //       //   flags,
  //       //   languages,
  //       //   name,
  //       //   population,
  //       //   subregion,
  //       //   tld,
  //       // } = country;
  //       console.log(country);
  //     });
  //   });
  // }

  // useEffect(() => {
  //   getDataFromAPI();
  // }, []);

  return (
    <div style={{ marin: 0, padding: 0 }}>
      <NavBar>
        <span style={{ fontWeight: "800" }}>Where in the world?</span>
        <ModeSwitcher>
          <i className="fa-regular fa-moon"></i>
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </ModeSwitcher>
      </NavBar>

      <Outlet />
    </div>
  );
}

export default CountryMainDisplay;
