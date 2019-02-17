import React from "react";

import { storiesOf } from "@storybook/react";
import { Block } from "../src/components/Feed/Block/Block";

storiesOf("Feed/Block", module).add("with text", () => (
  <Block>Hello Button</Block>
));
