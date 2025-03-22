import { h, render } from "preact";
import SignDocument from "./SignDocument";

document.addEventListener("DOMContentLoaded", () => {
  const mountPoint = document.getElementById("embed-root");

  if (!mountPoint) {
    console.error("🚨 ERROR: #embed-root not found in the DOM!");
    return;
  }

  // Extract data attributes from the mount point
  const token = mountPoint.getAttribute("data-token") || null;
  const name = mountPoint.getAttribute("data-name") || null;
  const email = mountPoint.getAttribute("data-email") || null;

  if (!token) {
    console.error("🚨 ERROR: No token found in #embed-root! Cannot render the component.");
    return;
  }

  console.log("✅ Mounting SignDocument with:", { token, name, email });

  // Render the component with dynamic props
  render(h(SignDocument, { token, name, email }), mountPoint);
});
