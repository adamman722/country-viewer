import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import "../fontawesome-free-6.1.1-web/css/all.css";

function CountryMainDisplay() {
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

  return (
    <div>
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
