import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaBorderAll } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GrMenu, GrUserAdmin } from "react-icons/gr";

import {
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_SIGN_OUT } from "../redux/auth.types";

const Navbar = () => {
  let store = useSelector((store) => store);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(store);
  const handleLogout = () => {
    dispatch({ type: AUTH_SIGN_OUT });
    navigate("/login");
  };

  return (
    <Box className="nav">
      <Heading color="#5AB9C1" fontWeight="bold">
        <span className="white">RED&White</span>
        <span className="black">_Shop</span>
      </Heading>

      <Box margin="0px 20px 0px auto">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<GrMenu className="icon" />}
            variant="solid"
          />
          <MenuList>
            <Link to="/info">
              <MenuItem icon={<GrUserAdmin className="icon" />}>
                Dashboard
              </MenuItem>
            </Link>
            <Link to="/">
              <MenuItem icon={<FaBorderAll className="icon" />}>
                AllProduct
              </MenuItem>
            </Link>
            <Link to="/product">
              <MenuItem
                icon={<MdOutlineProductionQuantityLimits className="icon" />}
              >
                My-Products
              </MenuItem>
            </Link>
            <Link to="/login">
              <MenuItem icon={<BiLogIn className="icon" />}>
                User-Login
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>

      {store.data.isAuthenticated && (
        <Box className="right-end">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FaRegUserCircle className="icon" />}
              variant="solid"
            />

            <MenuList background="black" color="white">
              <Center background="black" color="white">
                Welcome
              </Center>

              <MenuItem
                background="black"
                color="white"
                icon={<FaRegUserCircle className="icon" />}
              >
                {store.data.username}
              </MenuItem>
              <MenuItem
                background="black"
                color="white"
                icon={<FiLogOut className="icon" />}
                onClick={handleLogout}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
