import * as React from "react";
import Lottie from "react-lottie";
import * as animationData from "./internetOn.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const InternetOn = (): React.ReactElement => {
  return (
      <Lottie
        options={defaultOptions}
        height={"90%"}
        width={"90%"}
        isStopped={false}
        isPaused={false}
      />
  );
};

export default InternetOn;
