import {Paper, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import bird from "../../../assets/bird.jpg"
import cat from "../../../assets/cat.jpg"
import dog from "../../../assets/dog.jpg"
import rabbit from "../../../assets/rabbit.jpg"
import turtle from "../../../assets/turtle.jpg"
import AnimalOverviewCard from "./AnimalOverviewCard.jsx";

function AnimalOverview() {

  const descriptions = {
    birds: 'Vielleicht sind Sie ja auf der Suche nach einem gefiederten Freund? Dann sollten Sie unsere Vögel besuchen.',
    cats: 'Die besten Freunde der Vögel sind bekanntlich Katzen. Auch hier warten viele auf ein neues Zuhause.',
    dogs: 'Die besten Freunde von Katzen wiederum sind Hunde, von denen hier auch immer eine Menge rumtollen.',
    small_animals: 'Oder sind Sie eher auf der Suche nach etwas Kleinerem? Dann besuchen Sie unsere Kleintiere.',
    special: 'Ja, und dann haben wir noch eine Spezialrubrik mit ganz besonderen Exoten. Schauen Sie doch einfach mal bei Sonstigen Tieren vorbei.'
  }
  return (
      <>
        <Grid container spacing={3} rowSpacing={3} sx={{marginTop: '24px'}}>
          <Grid container size={12}>
            <Paper sx={{p: 3, bgcolor: 'white'}}>
              <Typography variant="h4" gutterBottom align='center'>
                Zu den Tieren
              </Typography>
              <Typography variant="body1">
              </Typography>

              <Grid container size={12} spacing={8} rowSpacing={5} justifyContent="center">
                <Grid size={4} sm={4} alignItems="center">
                  <AnimalOverviewCard title="Vögel" description={descriptions.birds} image={bird} buttonText="Zu den Vögeln" detailRoute="/voegel"/>
                </Grid>

                <Grid size={4} sm={4} alignItems="center">
                  <AnimalOverviewCard title="Katzen" description={descriptions.cats} image={cat} buttonText="Zu den Katzen" detailRoute="/katzen"/>
                </Grid>

                <Grid size={4} sm={4} alignItems="center">
                <AnimalOverviewCard title="Hunde" description={descriptions.dogs} image={dog} buttonText="Zu den Hunden" detailRoute="/hunde"/>
                </Grid>

                <Grid size={4} sm={4} alignItems="center">
                  <AnimalOverviewCard title="Kleintiere" description={descriptions.small_animals} image={rabbit} buttonText="Zu den Kleintieren" detailRoute="/kleintiere"/>
                </Grid>

                <Grid size={4} sm={4} alignItems="center">
                  <AnimalOverviewCard title="sonstigen Tiere" description={descriptions.special} image={turtle} buttonText="Sonstige Tiere" detailRoute="/sonstige-tiere"/>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

        </Grid>
      </>
  );
}

export default AnimalOverview;
