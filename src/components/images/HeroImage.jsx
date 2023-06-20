const HeroImage = ({ theme }) => {
  return (
    <>
      {theme === "dark" ? (
        <img
          src="/assets/images/hero-image-dark-mode.png"
          alt="A profile silhouette illustration of Amparo on a dark blue background, in an arched shape."
          width={480}
          height="100%"
        />
      ) : (
        <img
          src="/assets/images/hero-image-light-mode.png"
          alt="A profile illustration of Amparo in black and white, on a yellow background, in an arched shape."
          width={480}
          height="100%"
        />
      )}
    </>
  );
};

export default HeroImage;
