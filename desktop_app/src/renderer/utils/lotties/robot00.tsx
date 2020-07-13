import * as React from "react";
import Lottie from "react-lottie";
import * as animationData from "./robot-00.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

const LottieRobot00 = (): React.ReactElement => {


  return (
  <div> 
        <Lottie
      options={defaultOptions}
      height={"70%"}
      width={"70%"}
      isStopped={false}
      isPaused={false}
    />
  </div>
  );
}


export default LottieRobot00