import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

 const AssemblyCard=() =>{
  return (
    <Link to="/assemblycode" className="link-button">
    <Card
      sx={{
        maxWidth: 330,
        backgroundColor: "#2c3539",
        borderRadius: "25px",
        boxShadow: "1px 4px 10px 1px grey",
        fontFamily: "SF Pro Display, Arial, Helvetica, sans-serif",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="145"
          image="https://cdn-icons-png.flaticon.com/512/1453/1453773.png"
          alt="java logo"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            color="#d2e5f8"
          >
            Assembly
          </Typography>
          <Typography variant="body2" color="text.secondary" color="whitesmoke">
          Low-level language for direct hardware interaction and efficient performance in hardware/embedded systems.
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
}
export default AssemblyCard;
