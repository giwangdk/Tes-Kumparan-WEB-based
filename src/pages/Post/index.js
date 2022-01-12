import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {Link} from '../../components'
import {useDispatch, useSelector} from 'react-redux'
import { getUserByIdAsync, getPostByIdAsync, getDetailPostByid } from '../../utils/globalFunc';
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function Post() {

    const {id} = useParams() 
    console.log("id", id)
    const items = useSelector((state) => state.post)
    const dispatch = useDispatch()

    console.log(getPostByIdAsync(id))
    
  useEffect(() => {
        dispatch(getDetailPostByid(id))
  }, [])
  
  
      
  console.log(items)


    return (
        <Box>
            <Container>
            <CardContent>
          <Typography gutterBottom sx={{fontWeight:'fontWeightBold'}}  variant="h1"  component="div">
            {items?.post.post?.title}
          </Typography>
          
        
        <Typography variant="body1" >{items?.post.post?.body}</Typography>
        </CardContent>
          <Box sx={{
            paddingLeft:2,
            paddingRight: 2,
            paddingBottom: 2,
            display: 'flex',
            flexDirection:'column'
        }}>
          
          <Link to={`/user/${items.post.user.id}`}>
                        post by
            <Typography variant="h3" sx={{ fontWeight: 'fontWeightBold',  textDecoration:'underline' }}>{items?.post.user?.name}</Typography>
          </Link>
          <Typography variant="h5" sx={{
            fontWeight: 'fontWeightBold'
          }}>{items?.post.user?.company?.name}</Typography>
      </Box>

            </Container>
        </Box>
    )
}

export default Post
