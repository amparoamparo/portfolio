// SocialLinkWithIcon is a reusable link component that displays an icon only, based on the provided "icon" prop.

const SocialLinkWithIcon = ({ icon }) => {
  return (
    <>
      {icon === "email" ? (
        <a href="mailto:hello@amparo.codes" aria-label="Email">
          📧
        </a>
      ) : null}
      {icon === "github" ? (
        <a href="https://github.com/amparoamparo" aria-label="GitHub">
          🐙
        </a>
      ) : null}
      {icon === "linkedin" ? (
        <a href="https://linkedin.com/in/amparozeballos" aria-label="LinkedIn">
          💼
        </a>
      ) : null}
    </>
  );
};

export default SocialLinkWithIcon;
