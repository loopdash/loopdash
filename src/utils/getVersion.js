import { execSync } from "child_process";

export function getVersion() {
  try {
    // Get the base version (you can adjust this if needed)
    const baseVersion = "v1.0";

    // Count the total number of commits in the repository
    const commitCount = execSync("git rev-list --count HEAD").toString().trim();

    // Construct the version with the commit count as the patch number
    const version = `${baseVersion}.${commitCount}`;
    return version;
  } catch (error) {
    console.error("Error fetching Git commit count:", error.message);
    return "v0.0.0"; // Fallback version
  }
}
