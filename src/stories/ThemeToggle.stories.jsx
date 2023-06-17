import ThemeToggle from "../components/ThemeToggle";

export default {
  component: ThemeToggle,
  title: "Design System/Buttons/Theme Toggle",
};

export const Dark = () => <ThemeToggle switchTo="dark" />;
Dark.storyName = "Dark theme";
export const Light = () => <ThemeToggle switchTo="light" />;
Light.storyName = "Light theme";
