import { Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid2';

const About = () => {
  return (
      <Grid container spacing={3} sx={{marginTop: '24px'}}>
        <Grid size={12}>
          <Paper sx={{ p: 3, bgcolor: 'white' }}>
            <Typography variant="h4" gutterBottom align='center'>
              Über uns
            </Typography>
            <Typography variant="body1">
              Unser Tierheim setzt sich seit Jahren für das Wohl von Tieren ein.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
  );
};

export default About;