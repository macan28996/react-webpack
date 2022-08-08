import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { images } from "@public/assets/images";
import styled from "@emotion/styled";

export default function App() {
  return (
    <Box>
      <Box color={"red"}>Hello World!</Box>
      <Image src={images.test} />
      <Image src={"https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"} />
      <StyledBox>Test</StyledBox>
      <Image src={images.test_svg} />
    </Box>
  );
}
const StyledBox = styled(Box)`
  background: red;
  color: white;
`;
