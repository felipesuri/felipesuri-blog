declare global {
  interface Window {
    __onThemeChange(): void
    setTheme(newTheme: string): void
    __theme: string
  }
}
