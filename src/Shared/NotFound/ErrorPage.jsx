import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../assets/error/107894-404-page-not-found.json";

const ErrorPage = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default ErrorPage;
