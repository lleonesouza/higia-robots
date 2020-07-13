import * as React from "react";
import { arrowUp, arrowLeft, arrowRight, arrowDown } from "../../utils/images";
import styled from "@emotion/styled";

interface Props {setController:any}

const Div = styled.div({
  width: "42vh",
  height: "42vh",
  position: "absolute",
  borderRadius: "100%",
  top: "20%",
  left: "25%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemaplteRows: '1fr 1fr 1fr',
  background: "orange",
  zIndex: 100
});

const DarkVoid = styled.div({
  width: "100%",
  height: "100%",
  position: "absolute",
  left: 0,
  top: 0,
  cursor: 'pointer',
  background: "rgba(0,0,0,0.4)",
});


const ArrowImgUp = styled.img({
  gridColumn: 2,
  gridRow: 1,
  cursor: 'pointer',
  display: 'flex',
  justifyContet: 'center',
  alignItem: 'center',
  transition: '1s all',
    ":hover":{
        transform:"scale(1.5)"
    }
})

const ArrowImgLeft = styled.img({
  gridColumn: 1,
  gridRow: 2,
  cursor: 'pointer',
   display: 'flex',
  justifyContet: 'center',
  alignItem: 'center',
  transition: '1s all',
  ":hover":{
      transform:"scale(1.5)"
  }
})

const ArrowImgRight = styled.img({
  gridColumn: 3,
  gridRow: 2,
  cursor: 'pointer',
  display: 'flex',
  justifyContet: 'center',
  alignItem: 'center',
  transition: '1s all',
  ":hover":{
      transform:"scale(1.5)"
  }
})

const ArrowImgBottom = styled.img({
  gridColumn: 2,
  gridRow: 3,
  cursor: 'pointer',
  display: 'flex',
  justifyContet: 'center',
  alignItem: 'center',
  transition: '1s all',
  ":hover":{
      transform:"scale(1.5)"
  }
})

export default function Cleaner00({setController}: Props): React.ReactElement {
  return (
    <div>
      <DarkVoid onClick={() => setController(false)} />
      <Div>
      <ArrowImgUp src={arrowUp} />
      <ArrowImgLeft src={arrowLeft} />
      <ArrowImgRight src={arrowRight} />
      <ArrowImgBottom src={arrowDown} />
     </Div>
    
    </div>
  );
}
