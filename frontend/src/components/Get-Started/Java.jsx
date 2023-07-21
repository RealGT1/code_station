import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const MultiActionAreaCard1 = () => {
  return (
    <Link to="/javacode" className="link-button">
      <Card
        sx={{
          maxWidth: 350,
          backgroundColor: "#2c3539",
          borderRadius: "25px",
          fontFamily: "SF Pro Display, Arial, Helvetica, sans-serif",
          boxShadow: "1px 4px 10px 1px grey",
          marginLeft: "38px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="145"
            image="https://cdn-icons-png.flaticon.com/512/1183/1183618.png"
            alt="java logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" color="#d2e5f8">
              Java
            </Typography>
            <Typography variant="body2" color="text.secondary" color="#d2e5f8">
            Versatile high-level language widely used across the tech world for its platform independence and extensive libraries.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            size="small"
            color="primary"
            sx={{
              color: "black",
              backgroundColor: "#fffecc",
              fontFamily: "SF Pro Display, Arial, Helvetica, sans-serif",
            }}
          >
            Let's Go
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default MultiActionAreaCard1;
