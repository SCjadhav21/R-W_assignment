import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AUTH_SIGN_OUT } from "../redux/auth.types";

const Dashbourd = () => {
  let store = useSelector((store) => store);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: AUTH_SIGN_OUT });
    navigate("/login");
  };
  return (
    <Box
      backgroundImage={
        "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
      }
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      back
      h="100vh"
      display={"flex"}
      justifyContent={"center"}
      justifyItems={"center"}
      alignItems={"center"}
    >
      <Box
        fontSize={"extrabold"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        h="400px"
        w="400px"
        gap={10}
        border={"2px solid red"}
      >
        <Text>User Name : {store?.data?.username}</Text>
        <Text>User Email : {store?.data?.email}</Text>
        <Text w="90%">User Token : {store?.data?.token}</Text>
        <Button onClick={handleLogout}>LOGOUT</Button>
      </Box>
    </Box>
  );
};

export default Dashbourd;
