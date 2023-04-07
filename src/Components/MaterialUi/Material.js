import React from 'react';
import { Button } from '@mui/material'
import './style.css';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   myButton: {
//     backgroundColor: 'red !important',
//     color: 'white',
//     borderRadius:"10px",
//     margin:"10px 40px !important"
//   },
// });

const CommonButton = () => {
//   const classes = useStyles();

  return (
    <Button className={"welcome"} variant="contained" disableElevation>
      Disable elevation
    </Button>
  );
};

export default CommonButton;
