/**
 * SocialLink is a reusable link component that displays a button with either an icon only or an icon and a label, based on the provided "icon" and "showLabel" props.
 *
 * Example of a button with icon and label:
 * <SocialLink icon="email" showLabel={true} />
 *
 * Example of a button with icon only:
 * <SocialLink icon="email" showLabel={false} />
 */

import "../../scss/links.scss";
import "@fontsource/ibm-plex-mono/600.css";

const SocialLink = ({ icon, showLabel }) => {
  const labelOptions = {
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  };

  const label = showLabel ? labelOptions[icon] : null;

  return (
    <>
      {icon === "email" ? (
        <a
          href="mailto:hello@amparo.codes"
          aria-label="Email"
          className="social-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            className="social-link__icon"
          >
            <path
              fill="currentColor"
              d="M10 9c-1.1 0-2 .92-2 2.05c0 .57.22 1.07.59 1.45L12 16l3.42-3.5c.36-.37.58-.89.58-1.45C16 9.92 15.1 9 14 9c-.54 0-1.05.23-1.41.6l-.59.6l-.58-.59A1.99 1.99 0 0 0 10 9m10-5c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16m-3.3 4.06L20 6H4l3.3 2.06c-.41.39-.75.86-.97 1.39L4 8v10h16V8l-2.33 1.45c-.22-.53-.56-1-.97-1.39Z"
            />
          </svg>
          <span className="social-link__label">{showLabel && label}</span>
        </a>
      ) : null}
      {icon === "github" ? (
        <a
          href="https://github.com/amparoamparo"
          aria-label="GitHub"
          className="social-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            className="social-link__icon"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
            />
          </svg>
          <span className="social-link__label">{showLabel && label}</span>
        </a>
      ) : null}
      {icon === "linkedin" ? (
        <a
          href="https://linkedin.com/in/amparozeballos"
          aria-label="LinkedIn"
          className="social-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            className="social-link__icon"
          >
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
            />
          </svg>
          <span className="social-link__label">{showLabel && label}</span>
        </a>
      ) : null}
    </>
  );
};

export default SocialLink;
