import * as React from "react";
import Lottie from "react-lottie";
import * as animationData from "./internetOff.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

const InternetOff = (): React.ReactElement => {


  return (
  <div> 
        <Lottie
      options={defaultOptions}
      height={"90%"}
      width={"90%"}
      isStopped={false}
      isPaused={false}
    />
  </div>
  );
}


export default InternetOff