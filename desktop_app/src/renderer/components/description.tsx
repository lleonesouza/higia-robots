import React, { ReactElement } from "react";
import styled from "@emotion/styled";
interface Props {
  description: {
    text: string;
    sensors: string[];
  };
}

const Dialog = styled.div({
  width: "90%",
  position: "absolute",
  bottom: "2%",
  left: "2.5%",
  height: "180px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px black solid",
  background: "rgba(0,0,0,0.1)",
  borderRadius: "8px",
  padding: "10px",
  
});

const Divs = styled.div({
  width: "50%",
  height: "100%",
});

const H3 = styled.h3({
  letterSpacing: "1.5px",
  
});

export default function description({ description }: Props): ReactElement {
  return (
    <Dialog>
      <Divs>
        <H3> Sensores: </H3>
        <p>{description.sensors[0]}</p>
      </Divs>
      <Divs>
        <H3> Descriçao: </H3>
        <p>{description.text}</p>
      </Divs>
    </Dialog>
  );
}
