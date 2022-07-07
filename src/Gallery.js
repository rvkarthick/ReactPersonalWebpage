import React from 'react';
import './App.css';
import AppBar  from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar';
import Typography from '@mui/material/Button';
import {NavLink} from 'react-router-dom';
import './Gallery.css';
import {Tabs, TabList, Tab, TabPanel} from "https://cdn.skypack.dev/react-tabs@3.2.2";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


import one from './img/DSC04077.JPG';
import two from './img/rx.jpg';
import three from './img/DSC03296.JPG';
import four from './img/ladakh.jpg';
import five from './img/ns200.jpg';
import six from './img/kerala.jpg';
import seven from './img/DSC03246.JPG';
import eight from './img/ninja.jpg';
import nine from './img/ooty.jpg';

export default function Gallery(){
    return(
        <div class="Gallery">
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
          <center>
            <Button variant="contained" style={{backgroundColor:'#FFF5F4',color:'red'}}><b>Collection of Photo's</b></Button>
          <p>They say a picture is worth a thousand words,
             but don’t underestimate the importance of the words that accompany your pictures! </p></center>
            <Tabs>
      <TabList className="mt--10">
        <Tab>All</Tab>
        <Tab>FAMILY</Tab>
        <Tab>PLACE</Tab>
        <Tab>BIKE</Tab>
      </TabList>
      <div class="img">
      <TabPanel>
      
      <Grid container spacing={-30}>
  <Grid item xs={4}>
  <img src={one} width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={two} width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={three} width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={four} width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={five} width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={six} width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={seven} width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={eight} width='250px' />
  </Grid>
  <Grid item xs={4}>
  <img src={nine} width='250px' />
  </Grid>
</Grid>

      </TabPanel>
      <TabPanel>
      <Grid container spacing={-30}>
        <Grid item xs={4}>
        <img src={one} width='250px' />
        </Grid>
        <Grid item xs={4}>
        <img src={three} width='250px' />
        </Grid>
        <Grid item xs={4}>
        <img src={seven} width='250px' />
        </Grid>
        
      </Grid>
      </TabPanel>
      <TabPanel>
      <Grid container spacing={-30}>
        <Grid item xs={4}>
        <img src={four} width='250px' />

        </Grid>
        <Grid item xs={4}>
        <img src={six} width='250px' />

        </Grid>
        <Grid item xs={4}>
        <img src={nine} width='250px' />

        </Grid>
        
      </Grid>
      </TabPanel>
      <TabPanel>
      <Grid container spacing={-30}>
        <Grid item xs={4}>
        <img src={two} width='250px' />

        </Grid>
        <Grid item xs={4}>
        <img src={five} width='250px' />

        </Grid>
        <Grid item xs={4}>
        <img src={seven} width='250px' />

        </Grid>
        
      </Grid>
      </TabPanel>
      </div>
    </Tabs>
    

            </div>
            
            
            
    );
}



