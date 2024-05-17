/**
 * Checks if a given URL is an internal link.
 * An internal link is a link that starts with "/" or "#", or has the same origin as the provided origin.
 *
 * @param href - The URL to check.
 * @param origin - The origin URL. If provided, the function checks if the URL has the same origin.
 * @returns A boolean indicating whether the URL is an internal link.
 */
function isInternalLink(
  href: URL | string,
  origin?: string | undefined,
): boolean {
  if (
    typeof href === "string" &&
    (href.startsWith("/") || href.startsWith("#"))
  ) {
    return true;
  }

  let urlObj: URL;
  if (typeof href === "string") {
    urlObj = new URL(href, origin);
  } else {
    urlObj = href;
  }
  return urlObj.origin === origin;
}

export { isInternalLink };
