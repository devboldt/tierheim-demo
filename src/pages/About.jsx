import {Typography, Paper, Box} from '@mui/material';
import Grid from '@mui/material/Grid2';
import AnnouncementBox from "../components/AnnouncementBox.jsx";

const About = () => {
  return (
      <Grid container spacing={3} sx={{marginTop: '24px'}}>
        <Grid size={12}>
          <Paper sx={{ p: 3, bgcolor: 'white' }}>
            <Typography variant="h4" gutterBottom align='center'>
              Über uns
            </Typography>
            <Typography variant="body1" align='center'>
              Unser Tierheim setzt sich seit Jahren für das Wohl von Tieren ein.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <AnnouncementBox headline="Kontakt" text="Musterstraße 12345" />
            </Box>
          </Paper>
        </Grid>
      </Grid>
  );
};

export default About;