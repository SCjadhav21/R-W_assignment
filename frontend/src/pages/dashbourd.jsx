import { Box, Center } from "@chakra-ui/react";
import React from "react";

const Dashbourd = () => {
  return (
    <Box
      h="80vh"
      display={"flex"}
      justifyContent={"center"}
      justifyItems={"center"}
      alignItems={"center"}
    >
      <Box h="400px" w="400px" border={"2px solid red"}></Box>
    </Box>
  );
};

export default Dashbourd;
