import {Paper, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";

const AnnouncementBox = ({headline, text}) => {
  return (
      <>
        <Grid size={12} sx={{ mt: 5, maxWidth: '60%', border: '2px solid #2c3e50', borderRadius: '4px' }}>
          <Paper sx={{ p: 3, bgcolor: 'white' }}>
            <Typography variant="h5" align='center' sx={{ mb: 2 }}>
              {headline}
            </Typography>
            <Typography variant="body1" align='center'>
              {text}
            </Typography>
          </Paper>
        </Grid>
      </>
  )
}

export default AnnouncementBox;