import React from 'react';
import './App.css';
import AppBar  from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar';
import Typography from '@mui/material/Button';
import {NavLink} from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import { GoogleMap } from "react-google-maps";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';


export default function Contact(){
    return(
        <div class="Contact">
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

<div className='Loc'>
<Container fixed>
    <center><Button variant="contained" style={{backgroundColor:'#FFF5F4',color:'black'}}><b>CONTACT</b></Button></center><br/>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={10}>
        <Grid item xs={6}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15665.831894908113!2d76.99886635!3d11.004224849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1656490141361!5m2!1sen!2sin" width="480" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Grid>
        <Grid item xs={6}>
        <iframe  style={{border:"0", width: "100%", height: "450px"}} src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&src=cnZrYXJ0aGljazk4QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2IuaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"  frameborder="0" allowfullscreen></iframe>

        </Grid>
      </Grid>
      <br/><hr/><br/><br/>

      <Grid container spacing={5}>
        <Grid item xs={4} style={{backgroundColor:"Gray"}}>
          <b>Location -</b><super><LocationOnIcon /></super>
                <p>11/300,Kilkundha Village,Kilkundha (Po),The Nilgiris-643219</p><br/>
                 <b>Email -</b><super> <EmailIcon/></super>
                <p>rvkarthick98@gmail.com</p>
                <b>Call - </b><super><CallIcon/></super>
                <p>+91 7094 99 0260</p>
        </Grid>
        <Grid item xs={8}>
        <form>
  
   <div>
    <TextField type="text" label="Name" style={{width:'40ch',marginRight:'20px'}} variant="outlined"required />
    <TextField type="text" label="Email" style={{width:'40ch'}} variant="outlined"required /></div><br/>
    <div>
    <TextField type="text" label="Subject" style={{width:'82ch'}} variant="outlined"required />
    </div><br/>
    <div>
    <TextField type="text" label="Message" style={{width:'82ch'}} variant="outlined"required /></div><br/><br/>

 
  
  <center><TextField type="submit" value="Submit" style={{width:'30'}} variant="filled"required /></center>
</form>
    

        </Grid>
        
          
      </Grid>
      <br/><br/><br/><br/><br/><br/><hr/>
    </Box>
    </Container>    

</div>
           

            </div>
            
            
            
    );
}



