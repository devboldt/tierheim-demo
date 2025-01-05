import Grid from "@mui/material/Grid2";
import {Box, Chip, Divider, Paper, Typography} from "@mui/material";
import AnimalDetailInfo from "./AnimalDetailInfo.jsx";

function AnimalDetailOverview({title, subtitle, descriptionPflegeplatz}) {
  const animalData = {
    name: "Max",
    race: "Golden Retriever",
    gender: "Männlich",
    isNeutered: true,
    birthdate: "14.08.2024",
    description: "Max ist ein freundlicher und energiegeladener Golden Retriever, der es liebt, lange Spaziergänge zu machen.",
    height: 56,
    weight: 32,
    tag: 'reserved'
  };

  const images = [
    {
      src: "https://placedog.net/320/180",
      width: 320,
      height: 180,

    },
    {
      src: "https://placedog.net/320/212",
      width: 320,
      height: 212,
    },
    {
      src: "https://placedog.net/320/200",
      width: 320,
      height: 200,
    },
  ];

  return (
      <>
        <Grid container spacing={3} rowSpacing={3} sx={{marginTop: '24px'}}>
          <Grid container size={12}>
            <Paper sx={{p: 3, bgcolor: 'white'}}>
              <Typography variant="h4" gutterBottom align='center'>
                Zu vermittelnde {title}
              </Typography>
              <Typography variant="body1" align={'center'}>
                {subtitle}
              </Typography>

              <Grid container spacing={2} rowSpacing={5} sx={{mt: 7, mb: 4}}>
                <Grid size={1} sm={2}>
                  <Box display="flex" alignItems="center" height="100%">
                    <Chip
                        label="reserviert"
                        color="secondary"
                    />
                  </Box>
                </Grid>
                <Grid size={11} sm={10}>
                  <Typography>
                    Es sind Interessenten für das Tier da, aber erst nach einer Platzbesichtigung (= siehe Vermittlung)
                    entscheidet sich, ob das Tier ein neues Zuhause hat. In dieser Zeit also, von der Zusage ein
                    Tier zu adoptieren bis zur Platzkontrolle, reservieren wir den neuen Mitbewohner so lange.
                    Bitte haben Sie Verständnis, dass wir ein Tier erst reservieren können, wenn sich die
                    Interessenten sicher sind. Wir können kein Tier über längere Zeit reservieren, da die
                    zukünftigen Besitzer erst in den Urlaub fahren oder ein Umzug in den nächsten Monaten ansteht.
                    Alle Tiere wünschen sich ein Zuhause und unser Ziel ist es, einen geeigneten Platz zu finden.
                    Deshalb möchten wir unsere Tiere nicht länger als nötig im Heim behalten.
                  </Typography>
                </Grid>

                <Grid size={1} sm={2}>
                  <Box display="flex" alignItems="center" height="100%">
                    <Chip
                        sx={{
                          height: 'auto',
                          '& .MuiChip-label': {
                            display: 'block',
                            whiteSpace: 'normal',
                          },
                        }}
                        label="Beschreibung folgt"
                        color="primary"
                    />
                  </Box>
                </Grid>
                <Grid size={11} sm={10}>
                  <Typography>
                    Liebe Tierfreunde, bitte beachten Sie, dass wir erst eine Beschreibung unserer Tiere schreiben können,
                    wenn wir das Tier kennen gelernt haben. Steht "Beschreibung folgt" ist das Tier erst bei uns eingezogen.
                    Wenn wir unseren Schützling besser kennen und seine Charaktereigenschaften sichtbar sind, erst dann folgt eine Beschreibung.
                  </Typography>
                </Grid>

                {descriptionPflegeplatz && (
                    <>
                      <Grid size={1} sm={2}>
                        <Box display="flex" alignItems="center" height="100%">
                          <Chip
                              label="Pflegeplatz"
                              color="success"
                          />
                        </Box>
                      </Grid>
                      <Grid size={11} sm={10}>
                        <Typography>
                          {descriptionPflegeplatz}
                        </Typography>
                      </Grid>
                    </>
                )}
              </Grid>

              <AnimalDetailInfo animalData={animalData} images={images} />
              <Divider />
              <AnimalDetailInfo animalData={animalData} images={images} />
            </Paper>
          </Grid>

        </Grid>
      </>
  )
}

export default AnimalDetailOverview;