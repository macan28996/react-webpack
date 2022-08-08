import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { images } from "@public/assets/images";

export default function App() {
  return (
    <Box>
      <Box color={"red"}>Hello World!</Box>
      <Image src={images.test} />
    </Box>
  );
}
