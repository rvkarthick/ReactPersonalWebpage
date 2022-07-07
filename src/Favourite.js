import React from 'react';
import './App.css';
import AppBar  from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar';
import Typography from '@mui/material/Button';
import {NavLink} from 'react-router-dom';



export default function Favourite(){
    return(
        <div class="Favorite">
            <div  class='Nav' style={{height:'11vh'}}>
            <AppBar position='static' color='inherit' >
                <Toolbar>
                    KARTHICK R
                    <span style={{paddingLeft:'250px',paddingBottom:4}}>
                    <Typography variant="h6" component="div" sx={{flexGrow:0}} >
                       Home
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
                    <NavLink to="/favourite" style={{textDecoration:"none" , color:"black"}}> Favourite</NavLink>

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


            

            

            </div>
            
            
            
    );
}



