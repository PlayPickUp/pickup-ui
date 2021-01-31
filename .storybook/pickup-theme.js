import { create } from "@storybook/theming";
import pickupLogo from "../stories/assets/pickup-logo.svg";

export default create({
  appBg: "#e3e4ec85",
  base: "light",
  brandTitle: "PickUp UI",
  brandUrl: "https://playpickup.com",
  brandImage: pickupLogo,
  colorSecondary: "#7A60FF",
  colorPrimary: "#25DA95",
});
