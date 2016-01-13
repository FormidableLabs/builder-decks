import createTheme from "spectacle/lib/themes/default/index";

const colors = {
  primary: "#FFFFFF",
  secondary: "#797675",
  tertiary: "#5f5c5b",
  // brand colors:
  // black and its tints:
  black: "#242121", // black
  darkestCharcoal: "#373534",
  darkerCharcoal: "#4a4746",
  darkCharcoal: "#5f5c5b",
  charcoal: "#737271",
  gray: "#898685",
  lightGray: "#a19e9d",
  lighterGray: "#b7b4b3",
  lightestGray: "#d1cecd",
  paleGray: "#e7e5e3", // lightest gray
  // red and its tints:
  brandRed: "#c43a31", // brand red
  darkestRed: "#cd5244",
  darkerRed: "#d56557",
  darkRed: "#dc7a6b",
  red: "#e58c7d",
  lightRed: "#eb9f92",
  lighterRed: "#efb3a7",
  paleRed: "#f5c5bc",
  palerRed: "#f8d9d2",
  palestRed: "#f6ebe7" // palest red
};

/*eslint-disable max-len*/
const fonts = {
  primary: "'Poppins', 'Futura', 'Century Gothic', 'AppleGothic', 'Trebuchet MS', Helvetica, sans-serif",
  secondary: "'Open Sans', 'Helvetica Neue', Helvetica, sans-serif",
  tertiary: "Consolas, 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', Monaco, Courier, monospace"
};
/*eslint-enable max-len*/

const theme = createTheme(colors, fonts);

// Overrides

// Global Settings
theme.screen.global.body.background = colors.primary;
theme.screen.global.body.color = colors.secondary;
theme.screen.global.body.fontFamily = fonts.tertiary;
// Pacman Progress Bar
theme.screen.progress.pacman.pacmanTop.background = colors.tertiary;
theme.screen.progress.pacman.pacmanBottom.background = colors.tertiary;
theme.screen.progress.pacman.point.borderColor = colors.tertiary;
theme.screen.progress.bar.bar.background = colors.tertiary;
theme.screen.progress.number.container.color = colors.tertiary;
// Components
// Blockquotes
theme.screen.components.quote.borderLeft = `1px solid ${colors.primary}`;
theme.screen.components.quote.color = colors.primary;
theme.screen.components.cite.color = colors.tertiary;
// Code
theme.screen.components.code.color = colors.darkGray;
theme.screen.components.code.fontFamily = fonts.tertiary;
theme.screen.components.codePane.pre.height = "100%";
// Headings
theme.screen.components.heading.h1.color = colors.secondary;
theme.screen.components.heading.h1.fontFamily = fonts.primary;
theme.screen.components.heading.h1.lineHeight = "1";
theme.screen.components.heading.h2.color = colors.secondary;
theme.screen.components.heading.h2.fontFamily = fonts.primary;
theme.screen.components.heading.h2.lineHeight = "1.2";
theme.screen.components.heading.h3.fontFamily = fonts.primary;
theme.screen.components.heading.h3.lineHeight = "1.2";
theme.screen.components.heading.h4.fontFamily = fonts.primary;
theme.screen.components.heading.h4.lineHeight = "1.2";
theme.screen.components.heading.h5.fontFamily = fonts.primary;
theme.screen.components.heading.h5.lineHeight = "1.2";
theme.screen.components.heading.h6.fontFamily = fonts.primary;
theme.screen.components.heading.h6.lineHeight = "1.2";
// Links
theme.screen.components.link.color = null;
// List
theme.screen.components.list.listStylePosition = "outside";
// Text
theme.screen.components.text.color = colors.secondary;
theme.screen.components.text.fontFamily = fonts.tertiary;

export default theme;
