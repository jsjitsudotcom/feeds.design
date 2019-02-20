import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  Header,
  SourceName,
  DatePublished,
  TagsContainer,
  Tag,
  Title
} from "./Block.sc";
import { Typography } from "../../Typography";

export function Block(props) {
  return (
    <Container>
      <Header>
        <SourceName>
          <Typography type="small">Echojs</Typography>
        </SourceName>
        <DatePublished>
          <Typography type="small">22:45</Typography>
        </DatePublished>
      </Header>
      <Title>A standard and Clean Series A Term Sheet</Title>
      <TagsContainer>
        <Tag>javascript</Tag>
        <Tag>web</Tag>
        <Tag>serveur</Tag>
      </TagsContainer>
    </Container>
  );
}

Block.defaultProps = {
  type: "base",
  weight: "regular",
  variant: "4"
};

Block.propTypes = {
  type: PropTypes.oneOf(["base", "small", "large", "title", "branding"]),
  weight: PropTypes.oneOf(["regular", "semi-bold", "bold"]),
  variant: PropTypes.oneOf(["1", "2", "3", "4"])
};
