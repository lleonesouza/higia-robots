import * as React from "react";
import {Div} from '../utils/styles'

interface Props {
    
}

export default function help({}: Props): React.ReactElement {
    const url = "https://higiarobots.com.br/help"
    return (
        <Div>
            Acesse: <a href={url}>Web Ajuda</a>
        </Div>
    )
}
