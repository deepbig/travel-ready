import { Typography, Box } from '@mui/material';
import React from 'react';

/**
 * TODO - need to import Travel Goal data from firestore.
 * @returns
 */
function TravelGoal() {
  return (
    <Box m={2}>
      <Typography variant='guideline' align='center'>
        You had not set any travel goal yet. Please add your travel goals!
      </Typography>
    </Box>
  );
}

export default TravelGoal;
