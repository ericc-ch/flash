import React from "react"
import ReactDOM from "react-dom/client"

import "@fontsource-variable/inter"
import "@fontsource-variable/jetbrains-mono"

import App from "./app"

import "./app/register"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
