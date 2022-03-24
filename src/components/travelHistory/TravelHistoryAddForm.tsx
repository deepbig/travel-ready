import {
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Paper,
  Chip,
  DialogActions,
  CardMedia,
  Card,
  Box,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Rating,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getUser, setUser } from 'modules/user';
import React, { useEffect, useState } from 'react';
import { auth } from 'db';
import { setBackdrop } from 'modules/backdrop';
import { TravelHistoryAddFormData } from 'types';
import Title from 'components/title/Title';
import { getSingleTravelHistory, setTravelHistory } from 'db/repositories/travelHistory';
import { getCountries } from 'modules/country';
import { isFound } from 'lib';
import { getUserFromDB } from 'db/repositories/user';
import { gettravelHistoryList, setTravelHistoryList } from 'modules/travelHistory';

interface TravelHistoryAddFormProps {
  open: boolean;
  handleClose: () => void;
}

function TravelHistoryAddForm(props: TravelHistoryAddFormProps) {
  const user = useAppSelector(getUser);
  const currentUser = auth.currentUser;
  const travelHistories = useAppSelector(gettravelHistoryList);
  const countries = useAppSelector(getCountries);
  const dispatch = useAppDispatch();
  const [values, setValues] = useState<TravelHistoryAddFormData>({
    id: '',
    uid: '',
    photoURL: '',
    country: '',
    site: '',
    description: '',
    tags: [],
    tag: '',
    imageURL: '',
    imageFile: null,
    rating: 0,
  });

  useEffect(() => {
    if (user) {
      setValues({
        id: `${currentUser?.uid}_${user.travel_histories.length + 1}`,
        uid: `${currentUser?.uid}`,
        photoURL: user.photoURL,
        country: '',
        site: '',
        description: '',
        tags: [],
        tag: '',
        imageURL: '',
        imageFile: null,
        rating: 5,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    let file =
      e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;

    if (file) {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setValues({
            ...values,
            imageFile: file,
            imageURL: `${reader.result}`,
          });
        }
      };
      reader.readAsDataURL(file);
    } else {
      setValues({ ...values, imageFile: null, imageURL: '' });
    }
  };

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleAddTag = () => {
    if (isFound(values.tag, values.tags)) {
      alert('You cannot add same tag twice.');
    } else {
      const newTags = values.tags;
      newTags.push(values.tag.toLowerCase());
      setValues({ ...values, tag: '', tags: newTags });
    }
  };

  const handleDeleteTag = (tag: string) => {
    if (!isFound(tag, values.tags)) {
      alert('You cannot delete a tag that is not in your list.');
    } else {
      const newTags = values.tags.filter((value) => value !== tag);
      setValues({ ...values, tags: newTags });
    }
  };

  const handleSubmit = async () => {
    if (
      values.imageFile &&
      values.id &&
      values.uid &&
      values.photoURL &&
      values.country &&
      values.site
    ) {
      dispatch(setBackdrop(true));
      await setTravelHistory(values);
      dispatch(setUser(await getUserFromDB(values.uid)));
      // add travel history in the beginning, remove last one.
      // let newList = await getListTravelHistory([values.id]);
      let newPost = await getSingleTravelHistory(values.id);
      let newList = newPost ? [newPost].concat([...travelHistories]) : [...travelHistories];
      if (newList.length % 3 === 1) {
        newList.pop();
      }
      dispatch(setTravelHistoryList(newList));
      dispatch(setBackdrop(false));
      props.handleClose();
    } else {
      alert('Please add all required fields first.');
    }
  };

  return (
    <Dialog open={props.open}>
      <DialogTitle sx={{ textAlign: 'center' }}>
        Travel History Add Form
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box display='flex' justifyContent='space-between'>
              <Typography component='h2' variant='h6' gutterBottom>
                Image
              </Typography>
              <Button variant='contained' component='label'>
                Upload
                <input
                  type='file'
                  accept='image/x-png,image/jpeg'
                  hidden
                  onChange={(e) => {
                    onImageChange(e);
                  }}
                />
              </Button>
            </Box>
            <Card sx={{ marginTop: 1 }}>
              {values.imageURL ? (
                <CardMedia
                  component='img'
                  height='194'
                  image={values.imageURL}
                  alt='image preview'
                />
              ) : (
                <Box sx={{ height: 194 }}></Box>
              )}
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Title>Country</Title>
            <FormControl sx={{ mt: 1, mb: 1 }} fullWidth>
              <Select
                id='countries-to-add'
                value={values.country}
                name='country'
                onChange={handleChangeSelect}
                size='small'
              >
                {countries?.map((c) => (
                  <MenuItem key={c.code} value={c.name}>
                    <img
                      loading='lazy'
                      width='20'
                      src={`https://flagcdn.com/w20/${c.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png 2x`}
                      alt={`Flag of ${c.name}`}
                      style={{ paddingRight: '2px' }}
                    />
                    {c.name} ({c.code})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Title>Sites</Title>
            <TextField
              margin='dense'
              id='site'
              name='site'
              fullWidth
              variant='outlined'
              onChange={handleChangeText}
              size='small'
              value={values.site}
            />
          </Grid>

          <Grid item xs={12}>
            <Title>Tags</Title>

            <TextField
              margin='dense'
              id='tag'
              name='tag'
              fullWidth
              variant='outlined'
              onChange={handleChangeText}
              size='small'
              value={values.tag}
            />
            <Button
              variant='contained'
              onClick={handleAddTag}
              fullWidth
              disabled={!values.tag}
              component='label'
            >
              Add
            </Button>

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
                  values.tags.map((tag, i) => (
                    <li key={i}>
                      <Chip
                        label={tag}
                        sx={{ margin: 0.5 }}
                        onDelete={() => {
                          handleDeleteTag(tag);
                        }}
                        color='primary'
                      />
                    </li>
                  ))
                ) : (
                  <Typography variant='guideline' align='center'>
                    Please add a tag to display list.
                  </Typography>
                )}
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Title>Review</Title>
            <Rating name="rating" size="large" value={values.rating} onChange={(event, newValue) => {
              setValues({ ...values, rating: newValue ? newValue : 1 })
            }} />
          </Grid>
          <Grid item xs={12}>
            <Title>Description</Title>
            <TextField
              margin='dense'
              id='description'
              name='description'
              fullWidth
              multiline
              maxRows={5}
              value={values.description}
              variant='outlined'
              onChange={handleChangeText}
              size="small"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} variant='contained'>
          Save
        </Button>
        <Button onClick={props.handleClose} variant='contained'>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default TravelHistoryAddForm;
