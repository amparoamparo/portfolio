import SocialLink from "../components/links/SocialLink";

export default {
  component: SocialLink,
  title: "Design System/Social Links/Link with icon only",
};

export const Email = () => <SocialLink icon="email" showLabel={false} />;
export const GitHub = () => <SocialLink icon="github" showLabel={false} />;
GitHub.storyName = "GitHub";
export const LinkedIn = () => <SocialLink icon="linkedin" showLabel={false} />;
LinkedIn.storyName = "LinkedIn";
