import React from "react";

import { Select, ISelectProps } from "./select";
import { Divider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";

export default {
  title: "Atoms/Select",
  component: Select,
};

export const Default = (arg: ISelectProps) => (
  <Box w={100}>
    <Select options={[{ value: "", label: "qew" }]} {...arg} />
    <Divider my={5} />
    <Select {...arg} />
  </Box>
);

Default.arg = {
  disabled: true,
};
