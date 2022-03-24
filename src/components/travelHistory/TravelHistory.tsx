import {
  Typography,
  Box,
  CircularProgress,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Rating,
  Paper,
  Chip,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getUser } from 'modules/user';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TravelHistoryAddForm from './TravelHistoryAddForm';
import {
  gettravelHistoryList,
  setTravelHistoryList,
} from 'modules/travelHistory';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getListTravelHistory } from 'db/repositories/travelHistory';

interface TravelHistoryProps {
  open: boolean;
  handleClose: () => void;
}

function TravelHistory(props: TravelHistoryProps) {
  const user = useAppSelector(getUser);
  const travelHistories = useAppSelector(gettravelHistoryList);
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(-1);

  useEffect(() => {
    if (user && count === -1) {
      setCount(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (count >= 0) {
      updateTravelHistoryList(count);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const updateTravelHistoryList = async (count: number) => {
    if (user) {
      if (count > 0) {
        dispatch(
          setTravelHistoryList(
            [...travelHistories].concat(
              await getListTravelHistory(
                user?.travel_histories,
                travelHistories[travelHistories.length - 1].createAt,
                3
              )
            )
          )
        );
      } else {
        dispatch(
          setTravelHistoryList(
            await getListTravelHistory(user?.travel_histories, null, 3)
          )
        );
      }
    }
  };

  const updateCount = () => {
    setCount(count + 3);
  };

  return (
    <>
      <Box m={2}>
        {!user ? (
          <Box display='flex' justifyContent='center' m={1} p={1}>
            <CircularProgress color='inherit' />
          </Box>
        ) : user.travel_histories?.length > 0 ? (
          <>
            <Grid
              container
              spacing={2}
              justifyContent='center'
              alignItems='center'
            >
              {travelHistories.map((travelHistory, i) => (
                <Grid item sm={12} md={6} lg={4} key={i}>
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar
                          alt='creator-profile'
                          src={travelHistory.photoURL}
                        />
                      }
                      action={
                        <>
                          <IconButton aria-label='edit'>
                            <EditIcon />
                          </IconButton>
                          <IconButton aria-label='delete'>
                            <DeleteIcon />
                          </IconButton>
                        </>
                      }
                      title={travelHistory.site}
                      subheader={travelHistory.createAt.toDate().toString()}
                    />
                    <CardMedia
                      component='img'
                      height='194'
                      image={travelHistory.image}
                      alt='media'
                    />
                    <CardContent sx={{ paddingBottom: 0 }}>
                      <Typography variant='body2' color='text.secondary'>
                        {travelHistory.description}
                      </Typography>

                      {travelHistory.tags.length > 0 ? (
                        <Paper
                          component='ul'
                          elevation={0}
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            listStyle: 'none',
                            margin: 0,
                            padding: 0,
                          }}
                        >
                          {travelHistory.tags.map((tag, i) => (
                            <li key={i}>
                              <Chip
                                label={tag}
                                sx={{ margin: 0.5 }}
                                color='primary'
                              />
                            </li>
                          ))}
                        </Paper>
                      ) : null}
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label='add to favorites'>
                        <FavoriteIcon />
                      </IconButton>
                      <Rating
                        name='rating'
                        value={travelHistory.rating}
                        readOnly
                        sx={{ paddingLeft: 1 }}
                      />
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box mt={2} display='flex' justifyContent='center'>
              {count > user.travel_histories.length ? (
                <Typography>
                  <Typography variant='guideline' align='center'>
                    This is the last travel history!
                  </Typography>
                </Typography>
              ) : (
                <IconButton onClick={updateCount}>
                  <ExpandMoreIcon />
                </IconButton>
              )}
            </Box>
          </>
        ) : (
          <Typography variant='guideline' align='center'>
            You don't have any travel history. Please add places you visited!
          </Typography>
        )}
      </Box>
      {props.open ? (
        <TravelHistoryAddForm
          open={props.open}
          handleClose={props.handleClose}
        />
      ) : null}
    </>
  );
}

export default TravelHistory;
