const ThemeToggle = ({ switchTo }) => {
  return (
    <>
      {switchTo === "dark" ? (
        <button aria-label="Switch to dark mode">🌛</button>
      ) : (
        <button aria-label="Switch to light mode">🌞</button>
      )}
    </>
  );
};

export default ThemeToggle;
