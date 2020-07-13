import * as React from "react";
import Lottie from "react-lottie";
import * as animationData from "./robot02.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

const Robot02 = (): React.ReactElement => {


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


export default Robot02