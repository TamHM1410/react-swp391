import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TanstackQueryProvider from "./Providers/QueryClient-provider.jsx";

createRoot(document.getElementById("root")).render(
  <TanstackQueryProvider>
    <App />
  </TanstackQueryProvider>
);
