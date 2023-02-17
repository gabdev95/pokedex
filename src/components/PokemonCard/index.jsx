import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';

export default function PokemonCard({ name, image, types }) {
  const typesHandler = () => {
    if (types[1]) {
      return types[0].type.name + ' / ' + types[1].type.name;
    }
    return types[0].type.name;
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </Box>
          <Typography gutterBottom variant="caption" component="div">
            {typesHandler()}
          </Typography>
          {/*<Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
  				</Typography>*/}
        </CardContent>
      </CardActionArea>
      {/*<CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
			</CardActions>*/}
    </Card>
  );
}
