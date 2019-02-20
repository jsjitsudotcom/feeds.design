import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";
import green from "@material-ui/core/colors/green";

const colors = {
  purple,
  red,
  green,
  grey
};

const fonts = {
  family: {
    system: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Open Sans",
      "Helvetica Neue",
      "sans-serif;"
    ].join(",")
  }
};

const border = {
  simple: "1px solid #ebebeb"
};

const spacing = {
  unit: 8
};

export default {
  name: "Default",
  colors,
  fonts,
  spacing,
  border
};
