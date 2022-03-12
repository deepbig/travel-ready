import {
  Avatar,
  Box,
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
} from '@mui/material';
import { useAppSelector } from 'hooks';
import { getUser } from 'modules/user';
import React from 'react';
import CountryIcon from '@mui/icons-material/Public';
import PlaceIcon from '@mui/icons-material/Flag';
import TagIcon from '@mui/icons-material/Tag';
import EditIcon from '@mui/icons-material/Edit';

/**
 * TODO - need to import Travel History data from firestore.
 * @returns
 */
function TravelPlan() {
  const user = useAppSelector(getUser);

  const handleEditCountries = () => {
    alert('need to develop this countries editfeature');
  };

  const handleEditPlaces = () => {
    alert('need to develop this places edit feature');
  };

  const handleEditTags = () => {
    alert('need to develop this tags feature');
  };

  return (
    <Box m={0.5}>
      {!user ? (
        <Box display='flex' justifyContent='center' m={1} p={1}>
          <CircularProgress color='inherit' />
        </Box>
      ) : (
        <Grid item xs={12}>
          <List sx={{ p: 0, m: 0 }}>
            <ListItem
              secondaryAction={
                <IconButton
                  edge='end'
                  aria-label='edit-countries-plan'
                  onClick={handleEditCountries}
                >
                  <EditIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <CountryIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`Countries: ${user.countries_plan?.length}`}
              />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton
                  edge='end'
                  aria-label='edit-places-plan'
                  onClick={handleEditPlaces}
                >
                  <EditIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <PlaceIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`Places: ${user.places_plan?.length}`} />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton
                  edge='end'
                  aria-label='edit-tags'
                  onClick={handleEditTags}
                >
                  <EditIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <TagIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`Tags: ${user.tags?.length}`} />
            </ListItem>
          </List>
        </Grid>
      )}
    </Box>
  );
}

export default TravelPlan;
