import SocialLinkWithIcon from "../links/SocialLinkWithIcon";
import SocialLinkWithIconAndLabel from "../links/SocialLinkWithIconAndLabel";

const SocialLinksContainer = ({ section }) => {
  return (
    <address>
      {section === "header" ? (
        <>
          <SocialLinkWithIconAndLabel icon="email" />
          <SocialLinkWithIconAndLabel icon="github" />
          <SocialLinkWithIconAndLabel icon="linkedin" />
        </>
      ) : null}
      {section === "footer" ? (
        <>
          <SocialLinkWithIcon icon="email" />
          <SocialLinkWithIcon icon="github" />
          <SocialLinkWithIcon icon="linkedin" />
        </>
      ) : null}
    </address>
  );
};

export default SocialLinksContainer;
