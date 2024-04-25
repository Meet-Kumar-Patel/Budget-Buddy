import React from "react";
import { Button, FormControl, TextField, Paper, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import image from "../images/incorrectroute.svg"
import "../css/incorrectroute.css"

function IncorrectRoute() {
    const navigate = useNavigate();

    const handleBack = () => {
      navigate(-1);
    };
  
    return (
      <div className="incorrect">
        <div className="incorrectShift">
          <Paper className="outercomponent">
            <Typography component="h1" variant="h5">
              404 : Page Not Found
            </Typography>
            <Typography component="body1">
              Looks the page you are looking for doesnot exist anymore. 
            </Typography>
            <Button color="primary" onClick={handleBack}>Back</Button>
          </Paper>
    
          <img src={image} className="image" />
        </div>
      </div>
    );
}

export default IncorrectRoute
