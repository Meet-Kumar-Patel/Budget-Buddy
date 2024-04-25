import React  , { useState , useEffect } from "react";
import {
  Button,
  FormControl,
  TextField,
  Paper,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import { useNavigate , useLocation  } from "react-router-dom";
import NavBar from "../component/navbar";
import "../css/main.css";
import axios from 'axios';
import { PieChart } from "react-minimal-pie-chart";


function Homepage() {
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [household, setHousehold] = useState(0);
  const [personal, setPersonal] = useState(0);
  const [others, setOthers] = useState(0);
  const location = useLocation();
  
  
  
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  useEffect(() => {
    // This line is not needed since we're using the state variable 'username' now
    // const username = location.state?.username;
    // localStorage.setItem('username',username);

    if (username) { // Only run the API request if a username exists
      axios.post(`https://v66lehpnad.execute-api.us-east-1.amazonaws.com/second/fetch`, {username})
        .then(response => {
          setHousehold(response.data.data.household);
          setPersonal(response.data.data.personal);
          setOthers(response.data.data.otherExpense);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [username]);
  
  console.log(user)
  const [firstName, setFirstName] = useState('User');

  const handleBack = () => {
    navigate(-1);
  };
 const data = [
  { title: "HouseHold", value: household || 10, color: "#3f51b5" },
  { title: "Personal", value: personal || 15, color: "white" },
  { title: "Others", value: others || 20, color: "grey" },
];

  return (
    <>
      <NavBar></NavBar>
      <div className="message">
        Welcome, {username}!
      </div>
      <div className="main">
        <div className="mainShift">
          <Paper className="outercomponent">
            <Typography variant="h5" component="h2">
              Your Expense Breakdown
            </Typography>
            {data.map((item, index) => (
              <Card key={index} className="card-component">
                <CardContent className="card-content">
                  <Typography variant="h6" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Total: ${item.value}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Paper>
          <div className="outercomponent">
            <div className="pie">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;