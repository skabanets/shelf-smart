import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import { App } from "./components/App";

import "./index.css";
import "modern-normalize/modern-normalize.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <ToastContainer autoClose={2000} />
  </>
);
