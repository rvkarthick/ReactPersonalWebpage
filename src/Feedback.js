import React from 'react';
import './App.css';
import AppBar  from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar';
import Typography from '@mui/material/Button';
import {NavLink} from 'react-router-dom';
//import { FormLabel } from '@mui/material';
import Box from '@mui/material/Box';



const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    borderColor: 'text.primary',
    width: '20rem',
    height: '27rem',
  };

export default function Feedback(){
    
    return(
        <div class="Feedback">
            <div  class='Nav' style={{height:'11vh'}}>
            <AppBar position='static' color='inherit' >
                <Toolbar>
                    KARTHICK R
                    <span style={{paddingLeft:'250px',paddingBottom:4}}>
                    <Typography variant="h6" component="div" sx={{flexGrow:0}} >
                    <NavLink to="/" style={{textDecoration:"none" , color:"black"}}> Home</NavLink>

                    </Typography>
                    <Typography variant="h6" component="div" sx={{flexGrow:0}}>
                        <NavLink to="/about" style={{textDecoration:"none" , color:"black"}}> About</NavLink>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{flexGrow:0.1}}>
                    <NavLink to="/resume" style={{textDecoration:"none" , color:"black"}}> Resume</NavLink>

                    </Typography>
                    <Typography variant="h6" component="div" sx={{flexGrow:0.1}}>
                    <NavLink to="/gallery" style={{textDecoration:"none" , color:"black"}}> Gallery</NavLink>

                    </Typography>
                    <Typography variant="h6" component="div" sx={{flexGrow:0.1}}>
                    <NavLink to="/fav" style={{textDecoration:"none" , color:"black"}}> Fav </NavLink>

                    </Typography>
                    <Typography variant="h6" component="div" sx={{flexGrow:0.1}}>
                    <NavLink to="/contact" style={{textDecoration:"none" , color:"black"}}> Contact</NavLink>

                    </Typography>
                    <Typography variant="h6" component="div" sx={{flexGrow:0.1}}>
                    <NavLink to="/feedback" style={{textDecoration:"none" , color:"black"}}> Feedback</NavLink>

                    </Typography>
                   
                    </span>
                   
                </Toolbar>
            </AppBar>
            </div>
            <div class='box'>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ ...commonStyles, border: 1 }} >
        <h1 class='fb'>Feedback</h1>
            <form class='form'>
                <label for="text"></label>
  <input type="text" id="name" placeholder='Name' required /><br/><br/>
  <label for="email"></label>
  <input type="email" id="email" placeholder='Email' required /><br/><br/>
  <label for="txt"></label>
  <input type="txt" id="comm" placeholder='Comments' required /><br/><br/>


  <button type="submit" id='sub'>Submit</button>
</form>
</Box>
</Box>
</div>

            
            

            

            </div>
            
            
            
    );
}



