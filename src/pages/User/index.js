import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {Link} from '../../components'
import {useDispatch, useSelector} from 'react-redux'
import { getUserByIdAsync } from '../../redux/postSlice';
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function User() {

    const {id} = useParams() 
    console.log("id", id)
    const items = useSelector((state) => state.post)
    const dispatch = useDispatch()

    
    
    useEffect(() => {
        dispatch(getUserByIdAsync(id))
    }, [])
    console.log(items)


    return (
        <Box>
            <Container>
            <CardContent>
          <Typography gutterBottom sx={{fontWeight:'fontWeightBold'}}  variant="h1"  component="div">
            {items?.user?.name}
          </Typography>
          
        
        <Typography variant="body1" >{items?.user?.email}</Typography>
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

export default User