import { LayoutHeader } from "@src/components/organisms/layout";
import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { IconMenu } from "@src/components/atoms/icons";

interface IHeaderProps {}

export const Header: React.VFC<IHeaderProps> = (): JSX.Element => {
  return (
    <Box
      as={LayoutHeader}
      bg={"white"}
      borderBottom={"4px solid"}
      borderBottomColor={"#666666"}
      minH={11}
    >
      <Flex alignItems={"center"} h={"full"} justifyContent={"space-between"} mx={2}>
        <Text>本ツールロゴ</Text>
        <IconMenu />
      </Flex>
    </Box>
  );
};
