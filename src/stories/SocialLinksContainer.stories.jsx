import SocialLinksContainer from "../components/containers/SocialLinksContainer";

export default {
  component: SocialLinksContainer,
  title: "Design System/Container/Social links container",
};

export const Header = () => <SocialLinksContainer section="header" />;
export const Footer = () => <SocialLinksContainer section="footer" />;
