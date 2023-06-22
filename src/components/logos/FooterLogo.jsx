/**
 * Logo component displayed in the footer. It's static and links to the home page.
 */

import "../../scss/logo.scss";
import "@fontsource/vt323";

const FooterLogo = () => {
  return (
    <a href="/" className="footer__logo">
      amparo.codes
    </a>
  );
};

export default FooterLogo;
