import "../../scss/hero-image.scss";

const HeroImage = () => {
  return (
    <>
      <img
        src="/assets/images/hero-image-light-mode-mobile.webp"
        alt="A profile illustration of Amparo in black and white, on a yellow background, in an arched shape."
        width={480}
        height="100%"
        className="hero-image__img-xs"
      />
      <img
        src="/assets/images/hero-image-light-mode.webp"
        alt="A profile illustration of Amparo in black and white, on a yellow background, in an arched shape."
        width={480}
        height="100%"
        className="hero-image__img-lg"
      />
    </>
  );
};

export default HeroImage;
