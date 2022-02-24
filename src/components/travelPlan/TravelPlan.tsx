import { Typography, Box } from '@mui/material';
import React from 'react';

/**
 * TODO - need to import Travel History data from firestore.
 * @returns
 */
function TravelPlan() {
  return (
    <Box m={2}>
      <Typography variant='guideline' align='center'>
        You currently does not have any travel plan. Please add your next travel
        plan!
      </Typography>
    </Box>
  );
}

export default TravelPlan;
