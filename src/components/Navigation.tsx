import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function Navigation() {
  return (
    <Box gap={10}>
      <Link to={"/home"}>Home</Link>
      <Link to={"/signup"}>Cadastro</Link>
    </Box>
  );
}
