import { Box } from "@chakra-ui/layout";
import { BoxProps } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";

const LayoutWrapper = styled(Box)`
  display: grid;
  grid-template:
    "header"
    "main"
    "footer"
    "bottomBar";
  grid-template-rows: auto 1fr auto auto;
  min-height: 100vh;
  width: 100%;
`;

export const LayoutHeader = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const LayoutFooter = styled.footer`
  grid-area: footer;
`;

export const LayoutMain = styled.main`
  grid-area: main;
`;

export const LayoutBottomBar = styled.div`
  grid-area: bottomBar;
  position: sticky;
  bottom: 0;
  z-index: 100;
`;

interface ILayoutProps extends BoxProps {}

export const Layout: React.FC<ILayoutProps> = ({ children, ...props }): JSX.Element => {
  return <LayoutWrapper {...props}>{children}</LayoutWrapper>;
};
