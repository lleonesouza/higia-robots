import * as React from "react";
import styled from "@emotion/styled";
import {Robot01} from '../utils/lotties'
import {Div} from '../utils/styles'


const Home = (): React.ReactElement => {
  return (
    <Div>
      <div> 
         <h1>Bem-Vindo ao Higia Robots</h1>
      <Robot01/>
      </div>
     
      <h3>
        entre no site: https://www.higiarobots.com.br para conhecer mais robos{" "}
      </h3>

      <h4>version: 1.0.0</h4>
    </Div>
  );
};

export default Home;
