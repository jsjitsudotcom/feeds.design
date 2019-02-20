import React from "react";
import { ThemeProvider as Provider } from "styled-components";
import theme from "./theme";
import { Global } from "./../global";

export const ThemeProvider = ({ children }) => (
  <Provider theme={theme}>
    <Global>{children}</Global>
  </Provider>
);

ThemeProvider.defaultProps = {};
