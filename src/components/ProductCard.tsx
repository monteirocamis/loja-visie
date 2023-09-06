// import { Card } from "react-bootstrap";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { formatCurrency } from '../utilities/formatCurrency';


type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export function ProductCard({ id, title, price, thumbnail }: ProductCardProps) {
  return (
    // <Card>
    //   <Card.Img
    //     variant="top"
    //     src={thumbnail}
    //     height="200em"
    //     style={{ objectFit: "cover" }}
    //  />

    // <Card.Body className="d-flex flex-column">
    //   <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
    //   <span className="fs-2">{title}</span>
    //   <span className="ms-2 text-muted">{price}</span>
    // </Card.Title>
    // </Card.Body>



    // </Card>








<Card sx={{ maxWidth: 345 }}>
<CardActionArea>
  <CardMedia
    component="img"
    height="140"
    image={thumbnail}
    title=''
    alt="macbook"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
    {formatCurrency(price)}
    </Typography>
  </CardContent>
</CardActionArea>
</Card>




  );
}
