import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain = "dev-sen8a052xxsksxlf.us.auth0.com"
    clientId="mrFmEwKZq5tbS3rkPM7VAcw5JgXB4Foh"
    redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
