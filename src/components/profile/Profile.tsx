import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  IconButton,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { auth } from 'db';
import { signOutUser } from 'db/repositories/auth';
import { deleteUser, updateUser } from 'db/repositories/user';
import { deleteAllTravelHistoriesByUserId } from 'db/repositories/travelHistory';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setBackdrop } from 'modules/backdrop';
import { getUser, setUser } from 'modules/user';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function Profile() {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const currentUser = auth.currentUser;
  const [openMessage, setOpenMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [values, setValues] = useState<any>();

  useEffect(() => {
    if (user) {
      setValues({ ...user });
    }
  }, [user]);

  const handleCloseMessage = () => {
    setOpenMessage(false);
    setMessage('');
  };

  const actionMessage = (
    <IconButton
      size='small'
      aria-label='close'
      color='inherit'
      onClick={handleCloseMessage}
    >
      <CloseIcon fontSize='small' />
    </IconButton>
  );

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.name === 'age' ? +e.target.value : e.target.value,
    });
  };

  const handleUpdateProfile = async (e: any) => {
    e.preventDefault();

    if (currentUser) {
      dispatch(setBackdrop(true));
      const user = await updateUser(currentUser.uid, values);
      if (user) {
        dispatch(setUser(user));
        setMessage('User profile is successfully updated!');
        setOpenMessage(true);
      } else {
        setMessage('User update process was not successful. Please try again.');
        setOpenMessage(true);
      }
      dispatch(setBackdrop(false));
    }
  };

  const handleDeleteAccount = async () => {
    if (currentUser) {
      if (
        window.confirm(
          'Are you sure you want to delete account and all histories?'
        )
      ) {
        dispatch(setBackdrop(true));
        let result = await deleteAllTravelHistoriesByUserId(currentUser.uid);
        if (!result) {
          dispatch(setBackdrop(false));
          return;
        }
        result = await deleteUser(currentUser.uid);
        if (!result) {
          dispatch(setBackdrop(false));
          return;
        }
        signOutUser();
        setMessage('User account is successfully deleted.');
        setOpenMessage(true);
      }
    } else {
      alert('User is not logged in.');
    }
  };

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        height='100%'
        justifyContent='center'
      >
        <Container maxWidth='sm'>
          <form onSubmit={handleUpdateProfile}>
            <Box mb={3}>
              <Typography color='textPrimary' variant='h3' align='center'>
                {user?.displayName}'s Profile
              </Typography>
            </Box>
            {values ? (
              <>
                <TextField
                  label='Display Name'
                  margin='normal'
                  name='displayName'
                  variant='outlined'
                  required
                  fullWidth
                  onChange={handleChange}
                  value={values.displayName}
                />
                <TextField
                  label='Email'
                  margin='normal'
                  name='email'
                  variant='outlined'
                  disabled
                  fullWidth
                  value={values.email}
                />

                <Grid item xs={12}>
                  <Box display='flex' justifyContent='space-between'>
                    <Typography component='h2' variant='h6' gutterBottom>
                      Travel Plan - Countries
                    </Typography>
                  </Box>
                  <Paper variant='outlined' sx={{ marginTop: 0.5 }}>
                    <Paper
                      component='ul'
                      elevation={0}
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        margin: 1,
                        padding: 0,
                      }}
                    >
                      {values.countries_plan.length > 0 ? (
                        values.countries_plan.map(
                          (country: string, i: number) => (
                            <li key={i}>
                              <Chip
                                label={country}
                                sx={{ margin: 0.5 }}
                                color='primary'
                              />
                            </li>
                          )
                        )
                      ) : (
                        <Typography variant='guideline' align='center'>
                          You have not added any country to travel.
                        </Typography>
                      )}
                    </Paper>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Box display='flex' justifyContent='space-between'>
                    <Typography component='h2' variant='h6' gutterBottom>
                      Travel Plan - Sites
                    </Typography>
                  </Box>
                  <Paper variant='outlined' sx={{ marginTop: 0.5 }}>
                    <Paper
                      component='ul'
                      elevation={0}
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        margin: 1,
                        padding: 0,
                      }}
                    >
                      {values.places_plan.length > 0 ? (
                        values.places_plan.map((place: string, i: number) => (
                          <li key={i}>
                            <Chip
                              label={place}
                              sx={{ margin: 0.5 }}
                              color='primary'
                            />
                          </li>
                        ))
                      ) : (
                        <Typography variant='guideline' align='center'>
                          You have not added any site to travel.
                        </Typography>
                      )}
                    </Paper>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Box display='flex' justifyContent='space-between'>
                    <Typography component='h2' variant='h6' gutterBottom>
                      Travel Plan - Tags
                    </Typography>
                  </Box>
                  <Paper variant='outlined' sx={{ marginTop: 0.5 }}>
                    <Paper
                      component='ul'
                      elevation={0}
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        margin: 1,
                        padding: 0,
                      }}
                    >
                      {values.tags.length > 0 ? (
                        values.tags.map((place: string, i: number) => (
                          <li key={i}>
                            <Chip
                              label={place}
                              sx={{ margin: 0.5 }}
                              color='primary'
                            />
                          </li>
                        ))
                      ) : (
                        <Typography variant='guideline' align='center'>
                          You have not added any tag to travel.
                        </Typography>
                      )}
                    </Paper>
                  </Paper>
                </Grid>
              </>
            ) : null}

            <Box my={2}>
              <Grid container justifyContent='center' spacing={2}>
                <Grid item>
                  <Button
                    color='primary'
                    // disabled={isSubmitting}
                    fullWidth
                    size='large'
                    type='submit'
                    variant='contained'
                  >
                    Update Profile
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color='primary'
                    fullWidth
                    size='large'
                    variant='contained'
                    onClick={handleDeleteAccount}
                  >
                    Delete Account
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Container>
      </Box>
      <Snackbar
        open={openMessage}
        autoHideDuration={5000}
        onClose={handleCloseMessage}
        message={message}
        action={actionMessage}
      />
    </>
  );
}

export default Profile;
