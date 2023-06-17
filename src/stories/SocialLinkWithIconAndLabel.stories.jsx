import SocialLinkWithIconAndLabel from "../components/links/SocialLinkWithIconAndLabel";

export default {
  component: SocialLinkWithIconAndLabel,
  title: "Design System/Social Links/Link with icon and label",
};

export const Email = () => <SocialLinkWithIconAndLabel icon="email" />;
export const GitHub = () => <SocialLinkWithIconAndLabel icon="github" />;
GitHub.storyName = "GitHub";
export const LinkedIn = () => <SocialLinkWithIconAndLabel icon="linkedin" />;
LinkedIn.storyName = "LinkedIn";
