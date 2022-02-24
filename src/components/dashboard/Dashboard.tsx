import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import Title from 'components/title/Title';
import { useTheme } from '@mui/material/styles';
import Copyright from 'components/copyright/Copyright';
import TravelHistory from 'components/travelHistory/TravelHistory';
import TravelGoal from 'components/travelGoal/TravelGoal';
import TravelPlan from 'components/travelPlan/TravelPlan';

function Dashboard() {
  const theme = useTheme();
  return (
    <Container maxWidth={false} sx={{ mt: 4, mb: 4 }}>
      <Grid container direction='row' spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              [theme.breakpoints.up('lg')]: {
                maxHeight: 632,
              },
              overflow: 'hidden',
              overflowY: 'auto',
            }}
            elevation={4}
          >
            <Title>Travel Goal</Title>
            <TravelGoal />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              [theme.breakpoints.up('lg')]: {
                maxHeight: 632,
              },
              overflow: 'hidden',
              overflowY: 'auto',
            }}
            elevation={4}
          >
            <Title>Travel Plan</Title>
            <TravelPlan />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={4}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Title>Travel History</Title>
            <TravelHistory />
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
}

export default Dashboard;
