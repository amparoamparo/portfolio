import ButtonWithIcon from "../components/ButtonWithIcon";

export default {
  component: ButtonWithIcon,
  title: "Button with icon",
  tags: ["autodocs"],
};

export const Email = () => <ButtonWithIcon icon="📧" />;
export const LinkedIn = () => <ButtonWithIcon icon="LinkedIn" />;
LinkedIn.storyName = "LinkedIn";
export const GitHub = () => <ButtonWithIcon icon="GitHub" />;
GitHub.storyName = "GitHub";
