import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init.jsx";
import Loading from "../../../Shared/Loading/Loading.jsx";

/* import ServiceDetails from "../../ServiceDetails/ServiceDetails.jsx"; */


const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div className="text-center mt-5">
        {/* <ServiceDetails></ServiceDetails> */}
        <ToastContainer />
      </div>
    );
  }

  return children;
};

export default RequireAuth;
