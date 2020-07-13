import * as React from "react";
import styled from "@emotion/styled";
import Robot00 from "../utils/lotties/robot00";
import {Link, } from "react-router-dom";

const NavDiv = styled.nav({
  width: "20%",
  height: "100vh",
  position: "absolute",
  left: 0,
  background: "black",
});

const Ul = styled.ul({
  margin: "0px",
  padding: "0px",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
});

const Li = styled.li({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  height: "90px",
  listStyle: "none",
  margin: "auto",
  transition: "1s all",
  cursor: "pointer",
  background: "black",
  color: "white",
  ":hover": {
    color: "black",
    background: "white",
  },
});

export default function Navbar({pages}:any): React.ReactElement {
  return (
    <NavDiv>
      <Ul>
      <Robot00 />

        {pages.map(({title, address}:any, index:any) => (
          <Link key={index} style={{
            height: "100%",
            textDecoration: "none",
            display: "flex",
            flexDirection: "column"
          }} to={address}> <Li>{title} </Li> </Link>
        ))}
      
      </Ul>
    </NavDiv>
  );
}
