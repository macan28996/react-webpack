import { Box, BoxProps } from "@chakra-ui/react";
import { LayoutFooter } from "@src/components/organisms/layout";
import React from "react";
interface IFooterProps extends BoxProps {}

export const Footer: React.FC<IFooterProps> = (props): JSX.Element => {
  return <Box {...props} as={LayoutFooter}></Box>;
};
