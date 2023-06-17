// SocialLinkWithIconAndLabel is a reusable link component that displays an icon and a label, based on the provided "icon" prop.

const SocialLinkWithIconAndLabel = ({ icon }) => {
  return (
    <>
      {icon === "email" ? (
        <a href="mailto:hello@amparo.codes" aria-label="Email">
          📧 Email
        </a>
      ) : null}
      {icon === "github" ? (
        <a href="https://github.com/amparoamparo">🐙 GitHub</a>
      ) : null}
      {icon === "linkedin" ? (
        <a href="https://linkedin.com/in/amparozeballos" aria-label="LinkedIn">
          💼 LinkedIn
        </a>
      ) : null}
    </>
  );
};

export default SocialLinkWithIconAndLabel;
