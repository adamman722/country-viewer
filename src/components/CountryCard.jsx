import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
function CountryCard() {
  const countries = useSelector((state) => state.countries.value);
  console.log(countries[0]);

  const MainFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const FlexDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 5px solid;
    width: fit-content;
    border-radius: 10px;
  `;

  const listOfFilterted = countries.map((country) => {
    return (
      <FlexDiv className="">
        <img src={country.flags.png} alt="" />
        <div>
          <div>{country.name.common}</div>
        </div>
      </FlexDiv>
    );
  });

  return (
    <MainFlex>{countries.length === 250 ? listOfFilterted : null}</MainFlex>
  );
}

export default CountryCard;
