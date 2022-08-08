import { Box, BoxProps } from "@chakra-ui/react";
import { LayoutMain } from "@src/components/organisms/layout";
import React from "react";

interface IContainerProps extends BoxProps {}

export const Main: React.FC<IContainerProps> = ({ children, ...props }): JSX.Element => {
  return (
    <Box {...props} as={LayoutMain}>
      {children}
    </Box>
  );
};
