/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/function-component-definition */
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '../../atoms/Link'



export default function Navbar() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: 'none !important', minHeight:70, 
              display: 'flex',
              justifyContent:'space-between',
              flexDirection: 'row',
              alignItems: 'center',
             backgroundColor:'#F1F6F9'}} >
              <Container>
                  
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
                  >
                    
                      <Link to="/">
                          <Typography variant="h4" sx={{fontWeight:'fontWeightBold'}}>Giwang</Typography>
                </Link>
                      <Link to="/">
                          <Typography variant="p" sx={{marginLeft:5}} >Home</Typography>
                </Link>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
}
