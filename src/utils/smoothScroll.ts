export const smoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string,
) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Optional: URL-Update ohne Springen
    window.history.pushState(null, "", `#${targetId}`);
  }
};
