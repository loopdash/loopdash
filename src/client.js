import { h, render } from "preact";
import Proposal from "./components/proposal.jsx";

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ client.js is executing!");

  const container = document.getElementById("documenso-embed");
  if (container) {
    console.log("✅ Found #documenso-embed! Mounting Preact...");

    // Retrieve token and name from data attributes
    const token = container.getAttribute("data-token");
    const name = container.getAttribute("data-name") || null;
    const email = container.getAttribute("data-email") || null;

    if (token) {
      render(<Proposal token={token} name={name} email={email} />, container); // ✅ Pass token & name as props
    } else {
      console.error("❌ No signing token found in data-token attribute!");
    }
  } else {
    console.error("❌ #documenso-embed not found in the DOM!");
  }
});
