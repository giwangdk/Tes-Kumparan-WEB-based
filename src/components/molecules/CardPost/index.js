import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '../../atoms/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles'

// import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
    root: {
        borderRadius: 18,
        backgroundColor:'#fff',
        minHeight:180
    },
  });

export default function CardPost({user, post}) {

    const classes = useStyles()
    // const history = useHistory()
    // const dispatch = useDispatch()


  return (
    
    <Box className={classes.root}>
    <Link to="">
      <CardContent>
          <Typography gutterBottom sx={{fontWeight:'fontWeightBold'}}  variant="h5"  color="text.primary" component="div">
            {post.title}
          </Typography>
          
        
        <Typography variant="body2" sx={{maxHeight:'50px', minHeight:'50px', overflow:'hidden'}} color="text.secondary">{post.body}</Typography>
        </CardContent>
          <Box sx={{
            paddingLeft:2,
            paddingRight: 2,
            paddingBottom: 2,
            display: 'flex',
            justifyContent:'space-between',
            alignItems:'center'
      }}>
        <Typography variant="span" sx={{ fontWeight: 'fontWeightBold' }}>dmsm</Typography>
        <Box>
        </Box>
      </Box>
      
    </Link>
    </Box>
  );
}