import React from "react";
import PropTypes from "prop-types";

import { Base, Small, Large, Title } from "./Typography.sc";

export function Typography(props) {
  if (props.type === "base") return <Base {...props} />;
  if (props.type === "small") return <Small {...props} />;
  if (props.type === "large") return <Large {...props} />;
  if (props.type === "title") return <Title {...props} />;

  return <Base {...props} />;
}

Typography.defaultProps = {
  type: "base",
  weight: "regular",
  variant: "4"
};

Typography.propTypes = {
  type: PropTypes.oneOf(["base", "small", "large", "title", "branding"]),
  weight: PropTypes.oneOf(["regular", "semi-bold", "bold"]),
  variant: PropTypes.oneOf(["1", "2", "3", "4"])
};
