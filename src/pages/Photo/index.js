/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { getDataByIdAsync } from '../../utils/globalFunc';
import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function Photo() {
  const [data, setData] = useState(null)
    const {id} = useParams() 
    console.log("id", id)

  const getData = async () => {
    const data = await getDataByIdAsync(`photos/${id}`)
        setData(data) 
  }
    
    
    useEffect(() => {
        getData()
    }, [])
  

  console.log("photo", data)
    return (
        <Box>
            <Container>
          <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <CardMedia component="img"
            sx={{ width: 200, marginBottom:2}}
            image={data?.thumbnailUrl}
                alt={data?.title} />
              <CardMedia component="img"
            sx={{ width: 200, marginBottom:2, marginLeft:2}}
            image={data?.url}
            alt={data?.title} />
          </Box>
          <Typography variant="h3">{ data?.title}</Typography>
          </Box>
            </Container>
        </Box>
    )
}

export default Photo
