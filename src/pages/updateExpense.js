import React , {useState,useEffect} from "react";
import {
  Button,
  FormControl,
  TextField,
  Paper,
  Typography,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { useNavigate , useLocation  } from "react-router-dom";
import axios from 'axios';
import NavBar from "../component/navbar";
import "../css/addexpense.css"
import image from "../images/expense.svg"




function AddExpense() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const location = useLocation();
  const [error, setError] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem('username'));
  }, []);

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleUpdateExpense = async (event) => {
    event.preventDefault();
    if (amount && category) {
      try {
        const response = await axios.put(
          "https://v66lehpnad.execute-api.us-east-1.amazonaws.com/second/update",
          {
            username: username,
            updates: {[category]:amount},
          }
        );

        console.log(response);
        if (response.data.statusCode === 200) {
            navigate("/main", { state: { username } })
        } else {
          setError("Invalid User credentials. Try Again.");
        }
      } catch (error) {
        setError("Error logging in", error);
      }
    }
  };

  return (
    <>
      <NavBar> </NavBar>
      <div  className="expense">
        <div className="expenseShift">
          <Paper className="outercomponent">
            <Typography component="h1" variant="h5">
              Add Expense  {username}
            </Typography>
            <form className="form">
            <FormControl variant="standard" fullWidth>
                <InputLabel >Type of Expense</InputLabel>
                <Select className="category"
                  value={category}
                  onChange={handleCategory}
                >
                  <MenuItem value={"household"}>Household Expense</MenuItem>
                  <MenuItem value={"personal"}>Personal Expense</MenuItem>
                  <MenuItem value={"otherExpense"}>Others</MenuItem>
                </Select>
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField variant="outlined" required placeholder="Amount" type="number"  value={amount} onChange={handleAmount}/>
              </FormControl>
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit" 
                onClick={handleUpdateExpense}
              >
                Add Expense
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="red"
                className="submit"
                style={{marginTop:'8px'}}
              >
                Delete Expense
              </Button>
            </form>
          </Paper>
          <img src={image} className="image" />
        </div>
      </div>
    </>
  );
}

export default AddExpense;
