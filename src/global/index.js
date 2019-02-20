import styled from "styled-components";
import { injectFonts } from "./fonts";

export const Global = styled.div`
  ${injectFonts()};

  * {
    box-sizing: border-box;
  }
`;
