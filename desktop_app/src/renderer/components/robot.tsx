import * as React from "react";
import styled from "@emotion/styled";
import {Robot} from '../../@types'
import { InternetOn, InternetOff, Controller } from "../utils/images";
import {Cleaner00} from './controllers'

const Div = styled.div({
  width: "200px",
  height: "300px",
  margin: "20px",
  border: "1px white solid",
  borderRadius: "25px",
  background: "rgba(255,255,255,0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "1s background",
  ":hover": {
    background: "rgba(255,255,255,0.4)",
  },
});

const Img = styled.img({
  width: "100%",
  height: "40%",
  borderRadius: "8px",
  
});

const InternetImg = styled.img({
  width: "25px",
  height: "25px",
});

interface Props {
  robot: Robot;
  setDescription: React.Dispatch<React.SetStateAction<{}>>;
}

export default function robot({
  robot,
  setDescription,
}: Props): React.ReactElement {
  const [connection, setConnection] = React.useState(false);
  const [controller, setController] = React.useState(false);
  const ConnectionStatus = connection ? InternetOn : InternetOff;
  const blank = {
    description: "",
    sensors: [""],
  };
  React.useEffect(() => {

    setTimeout(() => {
        setConnection(true)
    }, 2000);
  });

  const ControllerC = controller ? <Cleaner00 setController={setController}/> : null

  return (
    <div style={{ display: "flex" }}>
      <Div onMouseEnter={() => setDescription(robot.description)} onMouseLeave={() => setDescription(blank)}>
          
         
               <Img src={robot.picture} />
         
       
        
        {ControllerC}
       
        <h2>{robot.title} </h2>

        <button style={{background:'none'}} onClick={() => setController(!controller)}>
        <Controller />
        </button>
        <p>
          Connection Status: <InternetImg src={ConnectionStatus} />
        </p>
      </Div>
      
    </div>
  );
}
