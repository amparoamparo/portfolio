/**
 * ThemeToggle is a reusable button component that displays an icon and switches between light mode and dark mode, based on the provided "switchTo" prop.
 */

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
