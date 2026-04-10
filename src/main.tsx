
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import faviconUrl from "./assets/ce-logo.png";

  // Set favicon dynamically
  const link = document.querySelector("link[rel='icon']") || document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = faviconUrl;
  if (!document.querySelector("link[rel='icon']")) {
    document.head.appendChild(link);
  }

  createRoot(document.getElementById("root")!).render(<App />);
  