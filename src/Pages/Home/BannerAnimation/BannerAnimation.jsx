import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../assets/whatchs/35065-ar-watch-onboarding.json";

const BannerAnimation = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default BannerAnimation;
