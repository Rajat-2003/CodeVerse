// xNlouCi91dSesu6w;
// mongodb+srv://manerajat01:xNlouCi91dSesu6w@cluster0.j1r1b.mongodb.net/
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { appStore } from "./app/strore.js";
import { Toaster } from "./components/ui/sonner.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <App />
      <Toaster/>
    </Provider>
  </StrictMode>
);
