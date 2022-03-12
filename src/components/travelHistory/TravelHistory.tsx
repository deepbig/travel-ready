import { Typography, Box } from '@mui/material';
import React from 'react';

interface TravelHistoryProps {
  open: boolean;
  handleClose: () => void;
}

/**
 * TODO - need to import Travel History data from firestore.
 * @returns
 */
function TravelHistory(props: TravelHistoryProps) {
  return (
    <Box m={2}>
      <Typography variant='guideline' align='center'>
        You don't have any travel history. Please add places you visited!
      </Typography>
    </Box>
  );
}

export default TravelHistory;
