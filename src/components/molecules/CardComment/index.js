import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles'

// import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
    root: {
        borderRadius: 18,
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#9BA5',
        },
        minHeight:80,
        marginBottom:6
    },
  });

export default function CardComment({comment}) {

    const classes = useStyles()
    // const history = useHistory()
    // const dispatch = useDispatch()


  return (
    
    <Box className={classes.root}>
      <CardContent>
          <Typography gutterBottom sx={{fontWeight:'fontWeightBold'}}  variant="h5"  component="div">
            {comment.name}
          </Typography>
          
        
        <Typography variant="body2" >{comment.body}</Typography>
        </CardContent>
        </Box>
  );
}