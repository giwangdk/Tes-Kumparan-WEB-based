/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import {Link} from '../..';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import {useDispatch} from 'react-redux'
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
          <Grid container spacing={3} >
          {items?.user?.photos?.slice(0, 12)?.map((photo, key) => (
            <Grid item lg={2} md={3} xs={4} key={key}>
               <Link to={`photo/${album?.id}`}>
              <CardMedia component="img"
                
                image={photo.thumbnailUrl}
                alt={photo.title} />
            </Link>
           </Grid>
          ))}
          </Grid>
         </CardContent>
        </Box>
  );
}