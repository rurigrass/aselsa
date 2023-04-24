import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--brand": "#F7AB0A",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
  "--my-gray": "#666",
};

export const myTheme = buildLegacyTheme({
  "--gray-base": props["--my-gray"],

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-yellow"],

  //   // brand
  "--brand-primary": props["--brand"],

  //   //Default button
  "--default-button-color": props["--my-gray"],
  "--default-button-primary-color": props["--brand"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  //   //State
  "--state-info-color": props["--brand"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  //   //NavBar
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--brand"],
});
