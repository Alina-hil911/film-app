const INITIAL_STATE = {
  theme: "light",
};

const ThemeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      if (state.theme === "light") {
        return {
          theme: "dark",
        };
      } else if (state.theme === "dark") {
        return {
          theme: "light",
        };
      }
    default:
      return state;
  }
};

export default ThemeReducer;
