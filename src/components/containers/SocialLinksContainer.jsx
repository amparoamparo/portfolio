import SocialLink from "../links/SocialLink";
import "../../scss/containers.scss";

const SocialLinksContainer = ({ section }) => {
  return (
    <>
      {section === "header" ? (
        <address className="header__social-links">
          <SocialLink icon="email" showLabel={true} />
          <SocialLink icon="github" showLabel={true} />
          <SocialLink icon="linkedin" showLabel={true} />
        </address>
      ) : null}
      {section === "footer" ? (
        <address className="footer__social-links">
          <SocialLink icon="email" showLabel={false} />
          <SocialLink icon="github" showLabel={false} />
          <SocialLink icon="linkedin" showLabel={false} />
        </address>
      ) : null}
    </>
  );
};

export default SocialLinksContainer;
