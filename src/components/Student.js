import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Student() {
  return <>
  <Box>
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  <Button variant="contained">Add Student</Button>

  </Box>
  </>
}

export default Student