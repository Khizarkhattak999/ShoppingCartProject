import React, { useContext } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CreateContext from "../store/contextglobal";
import { Box, Grid } from "@mui/material";

const Cart = () => {
  const {savedProductData}=useContext(CreateContext);
  
  
  return (
      <>

      
    <h1 style={{textAlign:'center'}}>Your cart items </h1>

    <Box sx={{ marginTop: 10, marginLeft: 14, marginBottom: 22 }}>
        <Grid container spacing={4}>

    {savedProductData.map((product) => {
      return (
        
        <Card sx={{ maxWidth: 345, marginLeft: 3, marginBottom: 2}}>
         <Link to="/details">
         <CardMedia
           component="img"
           height="140"
           image={product.img}
           alt="green iguana"
           
           />
           </Link>
         <CardContent>
         <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
         <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#17C5C2", color: "#fff", justifyContent: "center" }}
              >
              View
            </Button>
          </Link>
           
         </CardContent>
         
         
       </Card>
      
      
      
      )})}

        </Grid>
</Box>
    
    
      {savedProductData.length === 0 && <h3 className="cartempty">Your Cart is empty.</h3>}
    </>
      
  )
};

export default Cart;
