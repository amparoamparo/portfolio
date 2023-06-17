// ButtonWithIcon is a reusable button component that displays an icon only, based on the provided "icon" prop.

const ButtonWithIcon = ({ icon }) => {
  return (
    <button icon={icon}>
      {icon === "email" ? "📧" : null}
      {icon === "github" ? "🐙" : null}
      {icon === "linkedin" ? "💼" : null}
    </button>
  );
};

export default ButtonWithIcon;
