import "../../scss/hero-image.scss";

const HeroImage = ({ theme }) => {
  return (
    <>
      {theme === "dark" ? (
        <div className="hero-image__dark"></div>
      ) : (
        // <img
        //   src="/assets/images/hero-image-dark-mode.webp"
        //   alt="A profile silhouette illustration of Amparo on a dark blue background, in an arched shape."
        //   width={480}
        //   height="100%"
        //   className="hero-section__img"
        // />
        // <div className="hero-image">
        <>
          <img
            src="/assets/images/hero-image-light-mode-mobile.webp"
            alt="A profile illustration of Amparo in black and white, on a yellow background, in an arched shape."
            width={480}
            height="100%"
            className="hero-image__img-xs"
          />
          <img
            src="/assets/images/hero-image-light-mode.png"
            alt="A profile illustration of Amparo in black and white, on a yellow background, in an arched shape."
            width={480}
            height="100%"
            className="hero-image__img-lg"
          />
        </>
        // </div>
      )}
    </>
  );
};

export default HeroImage;
