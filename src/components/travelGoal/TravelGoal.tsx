import { styled } from '@mui/material/styles';
import {
  Typography,
  Box,
  Grid,
  LinearProgress,
  linearProgressClasses,
  CircularProgress,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import { useAppSelector } from 'hooks';
import { getUser } from 'modules/user';
import React from 'react';
import TravelIon from '@mui/icons-material/Flight';
import { blue, purple, teal, orange, brown } from '@mui/material/colors';

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'barColor',
})<{ barColor: string }>(({ barColor }) => ({
  height: 8,
  borderRadius: 30,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#D3D3D3',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: barColor,
  },
}));

interface LinearProgressProps {
  title: string;
  value: number;
  barColor: string;
}

const barColor = [blue[500], purple[500], teal[500], orange[500], brown[500]];
const goals = [84, 12, 102, 82];

const LinearProgressWithLabel = ({
  title,
  value,
  barColor,
}: LinearProgressProps) => {
  return (
    <Grid container direction='column' spacing={1} sx={{ mt: 1.5 }}>
      <Grid item>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <Typography variant='body1'>{title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' color='inherit'>{`${Math.round(
              value
            )}%`}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <BorderLinearProgress
          variant='determinate'
          value={value <= 100 ? value : 100}
          barColor={barColor}
        />
      </Grid>
    </Grid>
  );
};

/**
 * TODO - need to import Travel Goal data from firestore.
 * @returns
 */
function TravelGoal() {
  const user = useAppSelector(getUser);

  return (
    <Box m={2}>
      {!user ? (
        <Box display='flex' justifyContent='center' m={1} p={1}>
          <CircularProgress color='inherit' />
        </Box>
      ) : (
        <List sx={{ p: 0, m: 0 }}>
          {/* <ListItem>
            <ListItemAvatar>
              <Avatar>
                <TravelIon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${user.travels} travels in life`} />
          </ListItem> */}
          {/* TODO - Goal collection should be in the database */}
          <LinearProgressWithLabel
            title={`${user.countries_visited.length} / ${user.countries_plan.length} countries I visited`}
            value={
              user.countries_plan.length > 0
                ? user.countries_visited.length / user.countries_plan.length
                : 0
            }
            barColor={barColor[0]}
          />
          <LinearProgressWithLabel
            title={`${user.places_visited.length} / ${user.places_plan.length} places I visited`}
            value={
              user.places_plan.length > 0
                ? user.places_visited.length / user.places_plan.length
                : 0
            }
            barColor={barColor[0]}
          />
        </List>
      )}
    </Box>
  );
}

export default TravelGoal;
