import * as React from "react";
import Lottie from "react-lottie";
import * as animationData from "./robot-intro.json";

export default function lottieRobot01(): React.ReactElement {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={"100%"}
      width={"100%"}
      isStopped={false}
      isPaused={false}
    />
  );
}
