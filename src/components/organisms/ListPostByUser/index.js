import React from 'react'
import { CardPost, Link } from '../../'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Badge from '@mui/material/Badge'
import Grid from '@mui/material/Grid'

const ListPostByUser = ({ user, items }) => {
    
    return (
        <div>
            <Container>
            <Box sx={{marginTop:3, marginBottom:3}}>
                    <Badge><Typography variant="span">Post by</Typography></Badge>
                    <Link to={`/user/${user?.id}`}>
                        <Typography variant="h3" sx={{ fontWeight: 'fontWeightBold', textDecoration:'underline' }}>{user.name}</Typography>
                    </Link>
            </Box>
                <Grid container spacing={2}>
                {
                items?.posts?.slice(0,8).map((post, key) =>
                
                (
                    <Grid item sm={6} xs={12} lg={3} md={4} >
                        <CardPost post={post} user={user} key={key}/>
                    </Grid>
                ))
            }
            </Grid>
            </Container>
        </div>
    )
}

export default ListPostByUser
