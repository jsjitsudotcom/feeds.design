import styled from "styled-components";

export const Container = styled.div(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
  borderRadius: "2px",
  padding: `${theme.spacing.unit * 2}px`
}));

export const Header = styled.div({
  display: "flex"
});

export const SourceName = styled.div(({ theme }) => ({
  color: theme.colors.green[400],
  textTransform: "uppercase"
}));

export const DatePublished = styled.div(({ theme }) => ({
  marginLeft: "auto",
  color: theme.colors.grey[400]
}));

export const TagsContainer = styled.div({});

export const Tag = styled.div({});

export const Title = styled.div(({ theme }) => ({
  color: theme.colors.grey[800]
}));
