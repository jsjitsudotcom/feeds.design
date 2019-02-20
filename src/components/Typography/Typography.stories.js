import React from "react";

import { storiesOf } from "@storybook/react";
import { Typography } from "./index";
import { ThemeProvider } from "../../theme/provider";

storiesOf("Typography", module).add("all styles", () => (
  <ThemeProvider>
    <Typography type="title">Title</Typography>
    <br />
    <Typography type="large">Large</Typography>
    <br />
    <Typography type="base">Base</Typography>
    <br />
    <Typography type="small">Small</Typography>
  </ThemeProvider>
));
