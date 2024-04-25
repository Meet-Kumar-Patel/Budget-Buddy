import React, { useState } from "react";
import {
  Button,
  FormControl,
  TextField,
  Paper,
  Typography,
  Grid,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import image from "../images/login.svg";
import "../css/login.css";
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    if (username && password) {
      try {
        const response = await axios.post(
          "https://v66lehpnad.execute-api.us-east-1.amazonaws.com/second/login",
          {
            username: username,
            password: password,
          }
        );

        console.log(response);
        if (response.data.statusCode === 200) {
            localStorage.setItem('username',username);
            navigate("/main" )

        } else {
          setError("Invalid User credentials. Try Again.");
        }
      } catch (error) {
        setError("Error logging in", error);
      }
    }
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Paper className="outercomponent">
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            <form className="form">
              <FormControl margin="normal" fullWidth>
                <TextField
                  variant="outlined"
                  autoFocus
                  placeholder="Username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  type="password"
                  required
                  variant="outlined"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                disabled={!username || !password}
                onClick={handleSignIn}
              >
                Login
              </Button>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="secondary"
                className="submit"
                onClick={handleSignUp}
              >
                Signup
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={image} className="image" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;