export default function (req) {
  // Default to false for static builds
  if (!req) {
    return { proposalAccessGranted: false };
  }

  // Fetch the value from `res.locals`
  const accessGranted = req.proposalAccessGranted || false;
  return { proposalAccessGranted: accessGranted };
}
