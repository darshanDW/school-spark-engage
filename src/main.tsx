import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// ...existing code...
const theme = localStorage.getItem("theme");
if (
  theme === "dark" ||
  (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
// ...existing code...
createRoot(document.getElementById("root")!).render(<App />);
