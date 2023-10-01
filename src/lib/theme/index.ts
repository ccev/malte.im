export function setTheme(theme: string) {
    const one_year = 60 * 60 * 24 * 365;
    document.cookie = `theme=${theme}; max-age=${one_year}; path=/`;
    document.body.setAttribute("data-theme", theme);
}