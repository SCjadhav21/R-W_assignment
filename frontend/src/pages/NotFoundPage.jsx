import { Box } from "@chakra-ui/react";
import React from "react";

const NotFoundPage = () => {
  return (
    <Box
      backgroundImage={
        "https://media.istockphoto.com/id/1304406740/photo/error-404-number-404-in-three-dimensions-next-to-a-security-magnifying-glass-on-a-yellow.jpg?s=2048x2048&w=is&k=20&c=c11uFVIwAL3oCMRtaI1zDUhA5P4rVKYtCLea4Pdrtp8="
      }
      h="100vh"
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      fontWeight={"extrabold"}
      fontSize={"60px"}
    >
      Page Not Found
    </Box>
  );
};

export default NotFoundPage;
