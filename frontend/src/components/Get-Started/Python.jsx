import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const PythonCard=()=> {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "#2c3539",
        borderRadius: "25px",
        fontFamily: "SF Pro Display, Arial, Helvetica, sans-serif",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="145"
          image="https://cdn-icons-png.flaticon.com/512/3098/3098090.png"
          alt="java logo"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            color="#d2e5f8"
          >
            Python
          </Typography>
          <Typography variant="body2" color="text.secondary" color="#d2e5f8">
            Java is a versatile and robust language which is widely used across
            the tech world.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to='/pythoncode' className='link-button'>
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
        </Link>
      </CardActions>
    </Card>
  );
}
export default  PythonCard;