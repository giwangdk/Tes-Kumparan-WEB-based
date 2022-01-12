import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import {Link} from '../..';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {getPhotosByIdAsync} from '../../../utils/globalFunc'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    root: {
        borderRadius: 18,
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#9BA5',
        },
    minHeight: 230,
    marginTop: 30
  },
  });

export default function CardAlbum({album, items}) {

    const classes = useStyles()
    const history = useHistory()

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPhotosByIdAsync(album.id))
    
    }, [])
    
     


  return (
    
    <Box className={classes.root}>
      <CardContent>
          <Typography gutterBottom sx={{fontWeight:'fontWeightBold'}}  variant="h3"  component="div">
          {album?.title}
          </Typography>
          <Box>
          {items?.user?.photos?.slice(0,12)?.map((photo)=>(
            <img src={photo.thumbnailUrl} alt="" srcset="" />
          ))}
          </Box>
         </CardContent>
        </Box>
  );
}