// ButtonWithIconAndLabel is a reusable button component that displays an icon and a label, based on the provided "icon" prop.

const ButtonWithIconAndLabel = ({ icon }) => {
  return (
    <button>
      {icon === "email" ? "📧 Email" : null}
      {icon === "github" ? "🐙 GitHub" : null}
      {icon === "linkedin" ? "💼 LinkedIn" : null}
    </button>
  );
};

export default ButtonWithIconAndLabel;
