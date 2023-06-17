import HeroImage from "../components/images/HeroImage";

export default {
  component: HeroImage,
  title: "Design System/Images/Hero image",
};

export const Dark = () => <HeroImage theme="dark" />;
Dark.storyName = "Dark theme";
export const Light = () => <HeroImage theme="light" />;
Light.storyName = "Light theme";
