import React, { useContext } from "react";
import styled from "styled-components";
import { DarkThemeContext } from "../App";
import tokens from "./Tokens";

const {lightTheme, darkTheme} = tokens

const StyledTable = styled.table`
  margin: 5px 0;
  background-color: ${(props) => (props.isDarkMode ? darkTheme.darkGrey2 : lightTheme.white)};
  width: 100%;
  overflow-y: scroll;
  border-collapse: collapse;
  th {
    text-align: left;
    background-color: ${(props) => (props.isDarkMode ? darkTheme.lightBlue : lightTheme.lightBlue)};
    color: ${(props) => (props.isDarkMode ? darkTheme.black : lightTheme.white)};
    padding: 3px 5px 15px 5px;
    
    @media (max-width: 900px) {
      :nth-child(3) {
        display: none;
      }
    
      :nth-child(5) {
        display: none;
      }
    }
    @media (max-width: 650px) {
      :nth-child(6) {
        display: none;
      }
    }
    overflow-x: auto;
  }
`;

export default function Table(props) {
  const { isDarkMode } = useContext(DarkThemeContext);

  return <StyledTable isDarkMode={isDarkMode}>{props.children}</StyledTable>;
}
