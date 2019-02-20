import React from "react";

import { storiesOf } from "@storybook/react";
import { Block } from "./index";
import { ThemeProvider } from "../../../theme/provider";

storiesOf("Feed/Block", module).add("all styles", () => (
  <ThemeProvider>
    <Block />
  </ThemeProvider>
));
