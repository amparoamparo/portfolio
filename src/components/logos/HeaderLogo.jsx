/**
 * Logo component displayed in the header. It's animated and links to the home page.
 */

import "../../scss/logo.scss";
import "@fontsource/vt323";

const HeaderLogo = () => {
  return (
    <div className="header__logo">
      <h1>
        <a href="/">amparo.codes</a>
      </h1>
    </div>
  );
};

export default HeaderLogo;
