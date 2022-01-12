import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {CardAlbum} from '../../components'
import {useDispatch, useSelector} from 'react-redux'
import { getDetailPhotoByid } from '../../utils/globalFunc';
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function Photo() {

    const {id} = useParams() 
    console.log("id", id)
    const items = useSelector((state) => state.post)
    const dispatch = useDispatch()

    
    
    useEffect(() => {
        dispatch(getDetailPhotoByid(id))
    }, [])
    console.log(items)


    return (
        <Box>
            <Container>
            <CardContent>
          <Typography gutterBottom sx={{fontWeight:'fontWeightBold'}}  variant="h1"  component="div">
            {items?.Photo?.Photo?.name}
          </Typography>
          
            <Box>
            <Typography variant="h5" >{items?.Photo?.Photo?.email}</Typography>
            <Typography variant="h4" >{items?.Photo?.Photo?.company?.name}</Typography>
            <Typography variant="h3" >{items?.Photo?.Photo?.address?.street}, {items?.Photo?.Photo?.address?.city}</Typography>
        
            </Box>
        
        </CardContent>
          <Box sx={{
            paddingLeft:2,
            paddingRight: 2,
            paddingBottom: 2,
            display: 'flex',
            flexDirection:'column'
        }}>
            <Typography>Albums</Typography>
            {
              items?.Photo?.albums?.map((album) =>( 
                <CardAlbum album={album} items={items}/>
              ))
            }
            
        <Box>
        </Box>
      </Box>

            </Container>
        </Box>
    )
}

export default Photo
