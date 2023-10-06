export function setTheme() {
  const storedTheme = localStorage.getItem("theme");

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  if (storedTheme !== "light" && storedTheme !== "dark") {
    localStorage.setItem("theme", getPreferredTheme());
  }

  if (getPreferredTheme() === "auto") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      showActiveTheme("auto");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light");
      showActiveTheme("light");
    }
  } else {
    document.documentElement.setAttribute("data-bs-theme", getPreferredTheme());
    showActiveTheme(getPreferredTheme());
  }
}

export function showActiveTheme(theme) {
  const activeThemeIcon = document.querySelector(".theme-icon-active use");
  const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
  const svgOfActiveBtn = btnToActive.querySelector(".mode-switch use").getAttribute("href");

  document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
    element.classList.remove("active");
  });

  btnToActive.classList.add("active");
  activeThemeIcon.setAttribute("href", svgOfActiveBtn);
}

export function addThemeListeners() {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    setTheme();
  });

  document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const theme = toggle.getAttribute("data-bs-theme-value");
      localStorage.setItem("theme", theme);
      setTheme();
      showActiveTheme(theme);
    });
  });
}