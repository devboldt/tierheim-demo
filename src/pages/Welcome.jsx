import {Typography, Paper, Box} from '@mui/material';
import Grid from '@mui/material/Grid2';
import AnnouncementBox from "../components/AnnouncementBox.jsx";

const Welcome = () => {
  const placeholderText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

  return (
      <Grid container spacing={3} sx={{marginTop: '24px'}}>
        <Grid xs={12}>
          <Paper sx={{ p: 3, bgcolor: 'white' }}>
            <Typography variant="h4" gutterBottom align='center'>
              Willkommen im Tierheim Sinsheim
            </Typography>
            <Typography variant="body1" align='center'>
              Hier finden Sie Ihren neuen tierischen Begleiter.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <AnnouncementBox headline="Neuigkeiten" text={placeholderText} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
  );
};

export default Welcome;