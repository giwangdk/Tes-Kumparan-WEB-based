import * as React from 'react';
import Box from '@mui/material/Box';
import {Link} from '../..';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {getDetailPostByid} from '../../../utils/globalFunc'
import { makeStyles } from '@mui/styles'

// import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
    root: {
        borderRadius: 18,
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#9BA5',
        },
        minHeight:230
    },
  });

export default function CardAlbum({album}) {

    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

console.log("album", album)

  return (
    
    <Box className={classes.root}>
      <CardContent>
          <Typography gutterBottom sx={{fontWeight:'fontWeightBold'}}  variant="h4"  component="div">
            {album?.title}
          </Typography>
         </CardContent>
        </Box>
  );
}