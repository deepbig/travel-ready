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
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getUser, setUser } from 'modules/user';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TravelHistoryAddForm from './TravelHistoryAddForm';
import {
  getTravelHistoryList,
  setTravelHistoryList,
} from 'modules/travelHistory';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  delTravelHistory,
  getListTravelHistory,
  getSingleTravelHistory,
  updateTravelHistoryLikes,
} from 'db/repositories/travelHistory';
import { auth } from 'db';
import { setBackdrop } from 'modules/backdrop';
import { TravelHistoryData } from 'types';
import { getUserFromDB } from 'db/repositories/user';
import { pink } from '@mui/material/colors';

interface TravelHistoryProps {
  open: boolean;
  handleClose: () => void;
}

function TravelHistory(props: TravelHistoryProps) {
  const user = useAppSelector(getUser);
  const currentUser = auth.currentUser;
  const travelHistories = useAppSelector(getTravelHistoryList);
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(-1);
  const [openDel, setOpenDel] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedValue, setSelectedValue] = useState<TravelHistoryData | null>(
    null
  );
  const [isLikeProcessing, setIsLikeProcessing] = useState<string | null>(null);

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

  const handleDelete = async () => {
    if (currentUser && selectedValue) {
      dispatch(setBackdrop(true));

      await delTravelHistory(currentUser.uid, selectedValue);

      dispatch(setUser(await getUserFromDB(currentUser.uid)));

      const newTravelHistories = [...travelHistories];
      let index = newTravelHistories
        .map((obj) => obj.id)
        .indexOf(selectedValue.id);

      if (index !== -1) {
        newTravelHistories.splice(index, 1);
      }

      dispatch(setTravelHistoryList(newTravelHistories));

      setSelectedValue(null);
      setOpenDel(false);
      dispatch(setBackdrop(false));
    } else {
      alert('This request is not valid. Please try again.');
    }
  };

  const handleDeleteConfirm = (data: TravelHistoryData) => {
    setSelectedValue(data);
    setOpenDel(true);
  };

  const handleDeleteCancel = () => {
    setSelectedValue(null);
    setOpenDel(false);
  };

  const handleEdit = (data: TravelHistoryData) => {
    setSelectedValue(data);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setSelectedValue(null);
  };

  const handleLike = async (data: TravelHistoryData) => {
    if (currentUser) {
      setIsLikeProcessing(data.id);
      await updateTravelHistoryLikes(currentUser.uid, data);
      let newPost = await getSingleTravelHistory(data.id);
      let index = travelHistories.map((obj) => obj.id).indexOf(data.id);
      if (index !== -1 && newPost) {
        let newList = [...travelHistories];
        newList[index] = newPost;
        dispatch(setTravelHistoryList(newList));
      }
      setIsLikeProcessing(null);
    } else {
      alert('user does not logged in.');
    }
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
                          <IconButton
                            aria-label='edit'
                            onClick={() => handleEdit(travelHistory)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            aria-label='delete'
                            onClick={() => handleDeleteConfirm(travelHistory)}
                          >
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
                      <IconButton
                        aria-label='add to favorites'
                        onClick={() => handleLike(travelHistory)}
                        style={{ color: pink[400] }}
                        disabled={
                          isLikeProcessing === travelHistory.id ? true : false
                        }
                      >
                        <FavoriteIcon />
                        {travelHistory.likes.length > 0 ? (
                          <Typography variant='body2'>
                            +{travelHistory.likes.length}
                          </Typography>
                        ) : null}
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
          isUpdate={false}
          travelHistory={null}
        />
      ) : null}
      {openEdit ? (
        <TravelHistoryAddForm
          open={openEdit}
          handleClose={handleCloseEdit}
          isUpdate={true}
          travelHistory={selectedValue}
        />
      ) : null}
      <Dialog open={openDel}>
        <DialogTitle>Are you sure you want to delete this history?</DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={handleDeleteCancel}>
            Cancel
          </Button>
          <Button onClick={handleDelete}>Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TravelHistory;
