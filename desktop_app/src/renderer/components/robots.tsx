import * as React from "react";
import Robot from './robot'
import styled from "@emotion/styled";
import Description from './description'
import controllers from './controllers'
import {CleanerRobot} from '../utils/images'


const robots = [
    {
    title: "CleanerOne",
    date: "01/07/2020",
    description: {
        text: "Cleaner e o primeiro robo da linha higia robots, conta com equipamentos bem simples, possui um sensor para identificar a distancia dos objetos e evitar colisao, feito para mover-se no chao e recomendado para esterilizaço em geral, pode ser controlado via modo manual ou modo automatico",
        sensors: ["distancia"]
    },
    picture: CleanerRobot,
    ControllerComponent: controllers.Cleaner00
    }
]

const Div = styled.nav({
    width: "80%",
    height: "100vh",
    left: "20%",
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364);",
  });

export default function Robots(): React.ReactElement {
    const [description, setDescription] = React.useState({text: "", sensors: [""]})
    return (
        <Div>
              {robots.map((robot, index) => <Robot key={index} setDescription={setDescription} robot={robot}/>)}

              <Description description={description} />
        </Div>
    )
}
