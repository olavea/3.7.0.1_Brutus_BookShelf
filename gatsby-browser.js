import React from "react";
import { navigate } from "gatsby";

import { AuthProvider } from "react-use-auth";

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="dev-0rrnet7r.eu.auth0.com"
    auth0_client_id="su02Md40YMMguSfsxdlp6hCa2DYliRiT"
  >
    {element}
  </AuthProvider>
);
