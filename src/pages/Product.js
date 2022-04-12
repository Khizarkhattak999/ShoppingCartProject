import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CreateContext from '../store/contextglobal';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';



const Product = (props) => {

  const {dispatchProductData} = useContext(CreateContext)
  
  
  return (
    <>
    <Card sx={{ maxWidth: 345, marginLeft: 3, marginBottom: 2}}>
      <Link to={`/details/${props.id}`}>
      <CardMedia
        component="img"
        height="140"
        image={props.img}
        alt="green iguana"
        />
        </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <Typography gutterBottom variant="h6" component="" sx={{ marginLeft: 30}}>
          ${props.price}
        </Typography>
        
      </CardContent>
      
      <CardActions sx= {{marginLeft:1}}>
        
          <Button size="small" variant="contained" onClick={() => dispatchProductData({type:"add",payload:{id:props.id,name:props.title,img:props.img}})}>Add to Cart</Button>
        <Link to={`details/${props.id}`} style= {{ textDecoration: 'none'}}><Button size="small" variant= "filled">Learn More</Button></Link>
        <IconButton aria-label="add to favorites" sx={{color: "#ff0000"}}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
    </>
  )
}

export default Product