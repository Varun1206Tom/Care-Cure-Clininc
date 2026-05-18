import React from "react";
import { Home } from "../screens";
// import { Sigin, SignUp } from "../auth";
// import ForgotPassword from "../components/ForgotPassword";
// import VerifyEmail from "../components/VerifyEmail";


const publicRoutes = [
  { path: "/", element: <Home /> },
//   { path: "/signUp", element: <SignUp /> },
//   { path: "/verify-email", element: <VerifyEmail /> },
//   { path: "/forgot", element: <ForgotPassword /> },
];

export default publicRoutes;