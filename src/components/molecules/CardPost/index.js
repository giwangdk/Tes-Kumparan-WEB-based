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
        minHeight:230
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
          <Typography gutterBottom sx={{fontWeight:'fontWeightBold'}}  variant="h4"  component="div">
            {post.title}
          </Typography>
          
        
        <Typography variant="body2" sx={{maxHeight:'50px', minHeight:'50px', overflow:'hidden'}} >{post.body}</Typography>
        </CardContent>
          <Box sx={{
            paddingLeft:2,
            paddingRight: 2,
            paddingBottom: 2,
            display: 'flex',
            flexDirection:'column'
        }}>
          
          <Typography variant="span" sx={{ fontWeight: 'fontWeightBold' }}>post by {user.name}</Typography>
          <Typography variant="h5" sx={{ fontWeight: 'fontWeightBold' }}>{user.company.name}</Typography>
        <Box>
        </Box>
      </Box>
      
    </Link>
    </Box>
  );
}