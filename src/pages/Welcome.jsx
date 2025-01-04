import { Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Welcome = () => {
  return (
      <Grid container spacing={3} sx={{marginTop: '24px'}}>
        <Grid size={12}>
          <Paper sx={{ p: 3, bgcolor: 'white' }}>
            <Typography variant="h4" gutterBottom align='center'>
              Willkommen im Tierheim Sinsheim
            </Typography>
            <Typography variant="body1">
              Hier finden Sie Ihren neuen tierischen Begleiter.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
  );
};

export default Welcome;