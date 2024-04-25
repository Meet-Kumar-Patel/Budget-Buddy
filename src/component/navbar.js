import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
export default function NavBar({ data }) {
  const navigate = useNavigate();


  const handleExpense = () => {
    navigate("/addExpense");
  };

  const handleHome = () => {
    navigate("/main" );
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          noWrap
          component="a"
          href="/"
          variant="h3"
          style={{
            flexGrow: 1,
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            color: "white",
            textDecoration: "none",
          }}
        >
          BudgetBuddy
        </Typography>
        <Button color="inherit" onClick={handleHome}>Home</Button>
        <Button color="inherit" onClick={handleExpense}>Update Expense</Button>
        <Button color="inherit" onClick={handleLogout}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
