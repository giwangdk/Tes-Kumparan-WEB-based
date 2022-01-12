/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {CardAlbum} from '../../components'
import {useDispatch, useSelector} from 'react-redux'
import { getDetailUserByid } from '../../utils/globalFunc';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function User() {

    const {id} = useParams() 
    console.log("id", id)
    const items = useSelector((state) => state.post)
    const dispatch = useDispatch()

    
    
    useEffect(() => {
        dispatch(getDetailUserByid(id))
    }, [])
    console.log(items)


    return (
        <Box>
            <Container>
            <Box>
          <Typography gutterBottom sx={{fontWeight:'fontWeightBold'}}  variant="h1"  component="div">
            {items?.user?.user?.name}
          </Typography>
          
            <Box>
            <Typography variant="h5" >{items?.user?.user?.email}</Typography>
            <Typography variant="h4" >{items?.user?.user?.company?.name}</Typography>
            <Typography variant="h3" >{items?.user?.user?.address?.street}, {items?.user?.user?.address?.city}</Typography>
        
            </Box>
        
        </Box>
          <Box sx={{
            marginTop:5,
            display: 'flex',
            flexDirection:'column'
        }}>
            <Typography>Albums</Typography>
            {
              items?.user?.albums?.map((album, key) =>( 
                <CardAlbum album={album} items={items} key={key}/>
              ))
            }
            
        <Box>
        </Box>
      </Box>

            </Container>
        </Box>
    )
}

export default User
