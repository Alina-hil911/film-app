///when a user clicks on this button redux state.theme.theme changes
//theme is persisted

import React from "react";
import { connect } from "react-redux";
import { toggleTheme } from "../redux/Theme/Theme.actions";
import { ChangeThemeButton } from "./styled";
import { ReactComponent as LightbulbSVG } from "../assets/lightbulb.svg";

const ChangeTheme = ({ toggleTheme }) => {
  return (
    <ChangeThemeButton
      onClick={() => {
        toggleTheme();
      }}
    >
      <LightbulbSVG></LightbulbSVG>
    </ChangeThemeButton>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme()),
});
export default connect(null, mapDispatchToProps)(ChangeTheme);
