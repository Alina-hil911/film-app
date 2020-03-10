// const theme = {
//   light: {
//     backrgound:
//       "linear-gradient(247deg,rgba(243,189,170,0.9) 0%, rgba(122,205,243,0.9) 61%);",
//   },
//   dark: {
//     backrgound: "black",
//   },
// };

// export default theme;
//It gives us a means to effectively scale themes as they grow in complexity by defining names instead of styles
import theme from "styled-theming";
const backgroundColor = theme("mode", {
  light: "#fafafa",
  dark: "#222",
});
