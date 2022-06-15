const trapFocus = (container, firstFocusable, lastFocusable) => {
  const focusableElements = container.querySelectorAll(
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary'
  );

  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  const handleFirstTab = (e) => {
    if (e.key === "Tab" && e.shiftKey && e.target === firstFocusableElement) {
      e.preventDefault();
      lastFocusableElement.focus();
    }
  };

  const handleLastTab = (e) => {
    if (e.key === "Tab" && !e.shiftKey && e.target === lastFocusableElement) {
      e.preventDefault();
      firstFocusableElement.focus();
    }
  };

  firstFocusable.addEventListener("keydown", handleFirstTab);
  lastFocusable.addEventListener("keydown", handleLastTab);
};

export const removeTrapFocus = (
  firstFocusable,
  lastFocusable,
  handleFirstTab,
  handleLastTab
) => {
  firstFocusable.removeEventListener("keydown", handleFirstTab);
  lastFocusable.removeEventListener("keydown", handleLastTab);
  //lastFocusable.addEvent
};

export default trapFocus;
