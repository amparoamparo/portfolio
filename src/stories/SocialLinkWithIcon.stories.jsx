import SocialLinkWithIcon from "../components/SocialLinkWithIcon";

export default {
  component: SocialLinkWithIcon,
  title: "Design System/Social Links/Link with icon",
};

export const Email = () => <SocialLinkWithIcon icon="email" />;
export const GitHub = () => <SocialLinkWithIcon icon="github" />;
GitHub.storyName = "GitHub";
export const LinkedIn = () => <SocialLinkWithIcon icon="linkedin" />;
LinkedIn.storyName = "LinkedIn";
