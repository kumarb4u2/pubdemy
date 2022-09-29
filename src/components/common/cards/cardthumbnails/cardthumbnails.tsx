import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

type Course = {
  id: number;
  title: string;
  price: number;
  likes: number;
  rating: number;
  trainer: string;
  imageUrl: string;
  views: number;
  strikethroughPrice: number;
};

type Props = {
  course: Course;
};

export default function CardThumbNail({
  course: { imageUrl, title, trainer, rating },
}: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="p">
          {trainer}
        </Typography>
        <Rating name="read-only" value={rating} readOnly />
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
