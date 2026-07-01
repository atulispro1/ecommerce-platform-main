function readFlagCommentSequence() {
  return "";
}

function isDocumentNavigation(pathname) {
  if (!pathname || pathname.startsWith("/_next")) return false;
  if (pathname.startsWith("/api")) return false;
  const segments = pathname.split("/").filter(Boolean);
  const last = segments[segments.length - 1] ?? "";
  if (last.includes(".")) return false;
  return true;
}

module.exports = { readFlagCommentSequence, isDocumentNavigation };
