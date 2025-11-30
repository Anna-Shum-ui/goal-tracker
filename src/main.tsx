//main.tsx
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoalsProvider } from "./context/GoalsContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoalsProvider>
    <App />
  </GoalsProvider>
);
