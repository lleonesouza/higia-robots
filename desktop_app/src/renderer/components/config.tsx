import * as React from "react";
import {Div} from '../utils/styles'
import styled from "@emotion/styled";

const Form = styled.form({
    width: "200px",
    height: "300px",
    margin: "20px",
    border: "1px black solid",
    borderRadius: "25px",
    background: "rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });

interface Props {
    
}

export default function config({}: Props): React.ReactElement {
    return (
        <Div>
         

            <Form>
                <label>Email:</label><br/>
                <input type="text"/><br/>
                <label>Password:</label><br/>
                <input type="text"/><br/>

                <button>Entrar</button>
            </Form>
        </Div>
    )
}
