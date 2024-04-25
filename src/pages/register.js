import React, { useState , useEffect} from 'react';
import { Button, FormControl, TextField, Paper, Typography, Grid, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import image from "../images/signup.svg";
import PasswordStrengthBar from 'react-password-strength-bar';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import "../css/register.css"
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [error , setError] = useState('');
  const [passwordMatch , setPasswordMatch] = useState(false);

  const navigate = useNavigate();
  
  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    if (email && password && confirmPassword && check) {
      try {
        const response = await axios.post(
          "https://v66lehpnad.execute-api.us-east-1.amazonaws.com/second/register",
          {
            username: email,
            password: password,
          }
        );
        if (response.status === 200) {
          navigate("/login");
        } else {
          setError('Error signing up.'); 
        }
      } catch (error) {
        setError('Error signing up.');
      }
    }
    else{
      setError('Please double check if your email is valid, passwords match and password checklist is completed');
    }
  };
  useEffect(()=>{

    setCheck(/(?=.*[a-z])/g.test(password) && /(?=.*[A-Z])/g.test(password) && /(?=.*[0-9])/g.test(password) && /(?=.*[!@#$%^&*])/g.test(password) && password.length > 5 && (/\S+@\S+\.\S+/g.test(email)))

  },[password])

  return (
    <div className="register">
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Paper className="outercomponent">
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            <form className="form" onSubmit={handleLogin}>
              <FormControl margin="normal" fullWidth>
                <TextField variant="outlined" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/> 
              </FormControl>
              <FormControl margin="normal"  fullWidth>
                <TextField 
                  type="password" 
                  required
                  variant="outlined" 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <PasswordStrengthBar password={password} />
                <List className="checklist">
                  <ListItem>
                    <ListItemIcon>{/(?=.*[a-z])/g.test(password) ? <CheckIcon color="primary" /> : <CloseIcon color="secondary" />}</ListItemIcon>
                    <ListItemText primary="Lowercase" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>{/(?=.*[A-Z])/g.test(password) ? <CheckIcon color="primary" /> : <CloseIcon color="secondary" />}</ListItemIcon>
                    <ListItemText primary="Uppercase" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>{/(?=.*[0-9])/g.test(password) ? <CheckIcon color="primary" /> : <CloseIcon color="secondary" />}</ListItemIcon>
                    <ListItemText primary="Numbers" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>{/(?=.*[!@#$%^&*])/g.test(password) ? <CheckIcon color="primary" /> : <CloseIcon color="secondary" />}</ListItemIcon>
                    <ListItemText primary="Symbols" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>{password.length >= 5 ? <CheckIcon color="primary" /> : <CloseIcon color="secondary" />}</ListItemIcon>
                    <ListItemText primary="Required Length" />
                  </ListItem>
                </List>
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField type="password" placeholder="Confirm Password" variant="outlined" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
                disabled={ !email || !password || !confirmPassword}
              >
                Sign Up
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

export default Register;
