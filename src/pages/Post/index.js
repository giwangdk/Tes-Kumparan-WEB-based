import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {Link} from '../../components'
import {useDispatch, useSelector} from 'react-redux'
import { getUserByIdAsync, getPostByIdAsync, getCommentByIdAsync } from '../../redux/postSlice';
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function Post() {

    const {id} = useParams() 
    console.log("id", id)
    const items = useSelector((state) => state.post)
    const dispatch = useDispatch()

    
    
    useEffect(() => {
        dispatch(getPostByIdAsync(id))
        dispatch(getUserByIdAsync(items.post.userId))
        dispatch(getCommentByIdAsync(items.post.id))
    }, [])
    console.log(items)


    return (
        <Box>
            <Container>
            <CardContent>
          <Typography gutterBottom sx={{fontWeight:'fontWeightBold'}}  variant="h1"  component="div">
            {items?.post?.title}
          </Typography>
          
        
        <Typography variant="body1" sx={{maxHeight:'50px', minHeight:'50px', overflow:'hidden'}} >{items?.post?.body}</Typography>
        </CardContent>
          <Box sx={{
            paddingLeft:2,
            paddingRight: 2,
            paddingBottom: 2,
            display: 'flex',
            flexDirection:'column'
        }}>
          
                    <Link to="">
                        post by
            <Typography variant="h3" sx={{ fontWeight: 'fontWeightBold',  textDecoration:'underline' }}>{items?.user?.name}</Typography>
          </Link>
          <Typography variant="h5" sx={{
            fontWeight: 'fontWeightBold'
          }}>{items?.user?.company?.name}</Typography>
        <Box>
        </Box>
      </Box>

            </Container>
        </Box>
    )
}

export default Post
