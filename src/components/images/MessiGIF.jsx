import "../../scss/messi.scss";

const MessiGIF = () => {
  return (
    <video autoPlay loop className="messi">
      <source src="../../images/messi.webm" type="video/webm" />
    </video>
  );
};

export default MessiGIF;
