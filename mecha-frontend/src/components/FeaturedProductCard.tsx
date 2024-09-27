import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Star, StarOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function FeaturedProductCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-16 mb-10 lg:gap-y-4 lg:gap-x-4">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="10"
          image="./tempKeyboardIg/prod1.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Keyboar Name
          </Typography>
          <Typography gutterBottom component="div">
            Brand Name
          </Typography>
          <div className="flex justify-between">
            <p>Available Quantity : 2</p>
            <p>Price : $34</p>
          </div>
          <div>
            Rating :<StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
          </div>
        </CardContent>
        <CardActions>
          <Link to="/products">
            <Button size="small" variant="contained">
              See Details
            </Button>
          </Link>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="10"
          image="./tempKeyboardIg/prod2.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Keyboar Name
          </Typography>
          <Typography gutterBottom component="div">
            Brand Name
          </Typography>
          <div className="flex justify-between">
            <p>Available Quantity : 2</p>
            <p>Price : $34</p>
          </div>
          <div>
            Rating :<StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
          </div>
        </CardContent>
        <CardActions>
          <Link to="/products">
            <Button size="small" variant="contained">
              See Details
            </Button>
          </Link>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="10"
          image="./tempKeyboardIg/prod3.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Keyboar Name
          </Typography>
          <Typography gutterBottom component="div">
            Brand Name
          </Typography>
          <div className="flex justify-between">
            <p>Available Quantity : 2</p>
            <p>Price : $34</p>
          </div>
          <div>
            Rating :<StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
          </div>
        </CardContent>
        <CardActions>
          <Link to="/products">
            <Button size="small" variant="contained">
              See Details
            </Button>
          </Link>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="10"
          image="./tempKeyboardIg/prod4.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Keyboar Name
          </Typography>
          <Typography gutterBottom component="div">
            Brand Name
          </Typography>
          <div className="flex justify-between">
            <p>Available Quantity : 2</p>
            <p>Price : $34</p>
          </div>
          <div>
            Rating :<StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
          </div>
        </CardContent>
        <CardActions>
          <Link to="/products">
            <Button size="small" variant="contained">
              See Details
            </Button>
          </Link>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="10"
          image="./tempKeyboardIg/prod5.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Keyboar Name
          </Typography>
          <Typography gutterBottom component="div">
            Brand Name
          </Typography>
          <div className="flex justify-between">
            <p>Available Quantity : 2</p>
            <p>Price : $34</p>
          </div>
          <div>
            Rating :<StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
          </div>
        </CardContent>
        <CardActions>
          <Link to="/products">
            <Button size="small" variant="contained">
              See Details
            </Button>
          </Link>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="10"
          image="./tempKeyboardIg/prod6.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Keyboar Name
          </Typography>
          <Typography gutterBottom component="div">
            Brand Name
          </Typography>
          <div className="flex justify-between">
            <p>Available Quantity : 2</p>
            <p>Price : $34</p>
          </div>
          <div>
            Rating :<StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
          </div>
        </CardContent>
        <CardActions>
          <Link to="/products">
            <Button size="small" variant="contained">
              See Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
