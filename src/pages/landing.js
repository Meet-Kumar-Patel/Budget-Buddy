import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardContent,
} from "@material-ui/core";
import video from "../videos/bg.mp4";
import SwipeableViews from "react-swipeable-views";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "../css/landing.css"

export default function LandingPage() {
  const navigate = useNavigate();

  const buttonClicked = () => {
    navigate("/login");
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="source">
      <video autoPlay loop muted className="background">
        <source src={video} type="video/mp4" />
      </video>
      <div className="content">
        <Container component="main" className="main" maxWidth="sm" style={{backgroundColor:"transparent"}}>
          <Typography
            variant="h2"
            component="h1"
            style={{ color: "white" }}
          >
            Welcome to Budget Buddy!
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            style={{ color: "white" }}
          >
            {"Expense handled easily."}
          </Typography>
          <Box mt={4}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={buttonClicked}
            >
              Get Started
            </Button>
          </Box>
          <Typography
            variant="h2"
            component="h1"
            style={{ textAlign:"center" ,color: "white" , paddingTop: "15em"}}
          >
            Our Promises!
          </Typography>

          <SwipeableViews
            enableMouseEvents
            animateHeight
            style={{ paddingTop: "2em" }}
            className="swipeableViews"
            index={currentIndex}
            onChangeIndex={(index) => setCurrentIndex(index)}
          >
            <Card
              className="card"
              style={{ backgroundColor: "white" , border:"2px dotted white" }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  style={{ color: "#3f51b5", fontSize: "x-large" , whiteSpace: 'pre-line'}}
                >
                  {`Welcome to Budget Buddy, your one-stop solution for effortless expense tracking. Stay on top of your financial goals with our easy-to-use, intuitive interface designed for everyone, from beginners to finance veterans. 
                  
                  Our powerful application offers real-time tracking of your income, expenses, and savings, providing detailed insights into your spending habits.😊
                  `}
                </Typography>
                <IconButton
                  color="secondary"
                  style={{ float: "right" }}
                  onClick={handleArrowClick}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </CardContent>
            </Card>
            <Card
              className="card"
              style={{ backgroundColor: "white" , border:"2px dotted white"}}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  style={{ color: "#3f51b5", fontSize: "x-large" , whiteSpace: 'pre-line'}}
                >
                  {`Streamline your financial management with customizable categories and tags, and get a visual representation of where your money goes each month with our in-depth reporting features.
                  
                  Our app is designed to handle everything from simple daily transactions to complex budgets and future financial planning.😎
                  `}
                </Typography>
                <IconButton
                  color="secondary"
                  style={{ float: "right" }}
                  onClick={handleArrowClick}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </CardContent>
            </Card>
            <Card className="card" style={{ backgroundColor: "white" ,border:"2px dotted white" }} >
              <CardContent>
              <Typography
                  variant="body1"
                  style={{ color: "#3f51b5", fontSize: "x-large" , whiteSpace: 'pre-line'}}>
                  {`Take control of your expenses with our unique features like receipt scanning, automated transaction categorizing, and integrated bill reminders. 
                  
                  Make better financial decisions with Budget Buddy - Your Personal Finance Assistant at your fingertips. Sign up now and start your journey towards financial independence!✨"
                  
                  `}
                </Typography>
              </CardContent>
            </Card>
          </SwipeableViews>
        </Container>   
      </div>
    </div>
  );
}
