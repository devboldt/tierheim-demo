import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

function AnimalOverviewCard({title, description, image, buttonText, detailRoute}) {
  const navigate = useNavigate();
  const location = useLocation();

  const navRoute = location.pathname + detailRoute;

  return (
      <Card sx={{ display: 'flex', maxWidth: 500 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
              sx={{ height: 280 }}
              image={image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="center">
              Unsere {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center', padding: '0px 16px 16px 16px' }}>
            <Button variant="contained" size="medium" sx={{bgcolor: '#2c3e50'}} onClick={() => navigate(navRoute)}>{buttonText}</Button>
          </CardActions>
        </Box>
      </Card>
  )
}

export default AnimalOverviewCard;