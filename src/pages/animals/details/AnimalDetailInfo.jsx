import { useState } from 'react';
import Grid from "@mui/material/Grid2";
import {
  Box,
  Typography,
  Modal,
  IconButton,
  Paper,
  Divider,
  Container, Chip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {Gallery} from 'react-grid-gallery';

function AnimalDetailInfo({ animalData, images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (index) => {
    setSelectedImage(images[index]);
  };

  return (
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: '#2c3e50',
                letterSpacing: '0.02em'
              }}
          >
            {animalData.name}
            <Chip
                label="reserviert"
                color="secondary"
                sx={{ marginLeft: 2}}
            />
          </Typography>


          <Paper
              elevation={2}
              sx={{
                p: 2,
                mb: 4,
                bgcolor: 'background.default'
              }}
          >
            <Gallery
                images={images}
                onClick={handleClick}
                enableImageSelection={false}
                rowHeight={280}
            />
          </Paper>

          <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 2,
                bgcolor: 'background.paper'
              }}
          >
            <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: 'text.primary'
                }}
            >
              {`${animalData.name} - ${animalData.race}`}
            </Typography>

            <Grid container spacing={2} sx={{ mb: 1 }}>
              <Grid size={12} sm={6}>
                <Typography variant="body1" color="text.secondary">
                  Geschlecht: <strong>{animalData.gender}</strong>
                </Typography>
                {animalData.isNeutered && (
                <Typography variant="body1" color="text.secondary">
                  Kastriert: <strong>Ja</strong>
                </Typography>
                    )}
              </Grid>
              <Grid size={12} sm={6}>
                <Typography variant="body1" color="text.secondary">
                  Geb.: <strong>{animalData.birthdate}</strong>
                </Typography>
              </Grid>
            </Grid>

            <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.7,
                  color: 'text.primary'
                }}
            >
              {animalData.description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Box
                sx={{
                  display: 'flex',
                  gap: 4,
                  justifyContent: 'center',
                  bgcolor: '#2c3e50',
                  p: 2,
                  borderRadius: 1,
                  color: 'primary.contrastText'
                }}
            >
              <Typography variant="h6">
                Gewicht: ca. {animalData.height} cm
              </Typography>
              <Typography variant="h6">
                Größe: ca. {animalData.weight} kg
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Image Modal */}
        <Modal
            open={selectedImage !== null}
            onClose={() => setSelectedImage(null)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
        >
          <Box
              sx={{
                position: 'relative',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                maxWidth: '90vw',
                maxHeight: '90vh',
                borderRadius: 2,
                outline: 'none',
              }}
          >
            <IconButton
                sx={{
                  position: 'absolute',
                  right: 1,
                  top: 1,
                  color: 'text.secondary'
                }}
                onClick={() => setSelectedImage(null)}
            >
              <CloseIcon />
            </IconButton>

            {selectedImage && (
                <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                >
                  <img
                      src={selectedImage.src}
                      alt={selectedImage.caption}
                      style={{
                        maxHeight: '70vh',
                        width: 'auto',
                        objectFit: 'contain'
                      }}
                  />
                  {selectedImage.caption && (
                      <Typography
                          variant="body2"
                          sx={{
                            mt: 2,
                            color: 'text.secondary',
                            textAlign: 'center'
                          }}
                      >
                        {selectedImage.caption}
                      </Typography>
                  )}
                </Box>
            )}
          </Box>
        </Modal>
      </Container>
  )
}

export default AnimalDetailInfo;