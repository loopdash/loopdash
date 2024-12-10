import { execSync } from "child_process";

export function getVersion() {
  try {
    return execSync("git describe --tags").toString().trim();
  } catch (error) {
    console.error("Error fetching Git version:", error.message);
    return "v0.0.0"; // Default version
  }
}
