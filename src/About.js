import React from 'react';
import './App.css';
import AppBar  from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar';
import Typography from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import pic from './img/myphoto.jpg';
import bag from './img/baduga.jpg';
import wild from './img/wildlife.jpg';
import sport from './img/volleybal.jpg';
import trav from './img/tarveling.jpg';
//import PropTypes from 'prop-types';
//import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';


//import { TravelExploreOutlined } from '@mui/icons-material';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function  LinearWithValueLabel(props){
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    width: 500,
    height: 15,
    borderRadius: 5,
  
    }
));
    return(
        <div class='About' id='about'>
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

            <div >
            <Container fixed>
            <center><Button variant="contained" style={{backgroundColor:'#FFF5F4',color:'black'}}><b>ABOUT</b></Button>
            <p>Even if you fail, it doesn't mean you will continue to fail. Be able to say you believed in
                 yourself and kept trying. Everything that is successful will begin with you believing in yourself.</p></center>
                 
                 
                 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
        
        </Grid>
        <Grid item xs={8}>
        <h3>PERSONAL INFO</h3>
            <p >
              Personal info is not the place to be humble; it is chance to be noticed and tell who i am ‘really’ and what you can do me.
            </p>
        </Grid>
        <Grid item xs={4} /*style={{image:`url(${img})`, }}*/>
        <img src={pic} width='250px' />
        </Grid>
        <Grid item xs={4} >
        <ul>
                  <li> <strong>Birthday:</strong> 23 Nov 1998</li><br/>
                  <li> <strong>Gender:</strong> Male</li><br/>
                  <li> <strong>Blood Group:</strong> B+</li><br/>
                  <li> <strong>Father Name:</strong> M N Radhakrishnan</li><br/>
                  <li> <strong>Phone:</strong> +91 70949 90620</li>
              
                </ul>
        </Grid>
        <Grid item xs={4}>
        <ul>
                  <li> <strong>Age:</strong> 23</li><br/>
                  <li> <strong>Degree:</strong> Master of Computer Application</li><br/>
                  <li> <strong>Email:</strong> rvkarthick98@gmail.com</li><br/>
                  <li> <strong>Address:</strong>11/300,Kilkudah Village(Po)</li><br/>
                  <li> <strong>City:</strong> The Nilgiris</li>
                  
                </ul>      
        </Grid>
        <Grid item xs={4}>
                   
        </Grid>
        <Grid item xs={8}>
        <p>
              <center>I have the freedom to tell them about myself and/or my brand.</center>
            </p>         
        </Grid>
      </Grid>
                  </Container>
               
            </div>
            <hr/>
            <Container fixed>
            <h2>Skills</h2>
          <p>Technical skills are the abilities and knowledge needed to perform specific tasks. They are practical, 
            sand often relate to mechanical, information technology, mathematical, or scientific tasks. Some examples include knowledge of programming languages, design programs, mechanical equipment, or tools.</p>
            <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ minWidth: 35 }}>
     <h2>HTML</h2>
     <BorderLinearProgress variant="determinate" value={70} color="success"/>
     </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="green"></Typography>
      </Box>
      <Box sx={{ width: '0%' }}>
     
    </Box>
    </Box>
    
        </Grid>
        <Grid item xs={6}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <h3>BOOTSTRAP</h3>
        <BorderLinearProgress variant="determinate" value={70} color="success"/>
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color='red'></Typography>
      </Box>
      <Box sx={{ width: '0%' }}>
     
    </Box>
    </Box>
        </Grid>
        <Grid item xs={6}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '90%', mr: 1 }}>
        <h3>CSS</h3>
        <BorderLinearProgress variant="determinate" value={70} color="success"/>
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="green"></Typography>
      </Box>
      <Box sx={{ width: '0%' }}>
     
    </Box>
    </Box>
        </Grid>
        <Grid item xs={6}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '700%', mr: 1 }}>
        <h3>SEMANTIC UI</h3>
        <BorderLinearProgress variant="determinate" value={70} color="success"/>
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="green"></Typography>
      </Box>
      <Box sx={{ width: '0%' }}>
     
    </Box>
    </Box>
        </Grid>
        <Grid item xs={6}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '60%', mr: 1 }}>
        <h3>JAVASCRIPT</h3>
        <BorderLinearProgress variant="determinate" value={70} color="success"/>
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="green"></Typography>
      </Box>
      <Box sx={{ width: '0%' }}>
     
    </Box>
    </Box>
        </Grid>
        <Grid item xs={6}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '85%', mr: 1 }}>
        <h3>REACT</h3>
        <BorderLinearProgress variant="determinate" value={70} color="success"/>
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="green"></Typography>
      </Box>
      <Box sx={{ width: '0%' }}>
     
    </Box>
    </Box>
        </Grid>
      </Grid>
            </div>
            
            </Container>
            <br/>
            <hr/>
            <Container fixed>
            <div>
            <center><h2>INTEREST</h2>
          <p> Good place to start and for many, what will first come to mind. For often what we like to do reflects who
             we are. Also great ways to connect with people. Shared interests in something , 
             makes for future friends and easy conversation. Unique interests show character and generate intrigue.</p></center><br/><br/>
              <center><Carousel controls indicators dark>
                  <div>
                  <img src={bag} alt='bag' style={{width:'500px'}}/>
                  <h3>DANCING</h3>
                <h4>Badaga Traditional</h4>
                <p>
                  
                  Badaga dance is the high lighting custom performed to please and make the goddess happy. Dance plays a key role in all functions, festivals and even for death funeral of badaga.
                 
                </p>
                <br/>
  
                  </div>
                  <div>
                  <img src={wild} alt='wild' style={{width:'500px'}} />
                  <h3>PHOTOGRAPHY</h3>
                <h4>Wild Life</h4>
                <p>
                  Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.
                </p>
                  <br/>
                  </div>
                  <div>
                  <img src={sport} alt='sport' style={{width:'500px'}} />
                  <h3>SPORTS</h3>
                <h4>Volley Ball</h4>
                <p>
                  volleyball, game played by two teams, usually of six players on a side, in which the players use their hands to bat a ball back and forth over a high net, trying to make the ball touch the court within the opponents' playing area before it can be returned.
                </p>  
  
                  </div>
                  <div>
                  <img src={trav} alt='trav' style={{width:'500px'}} />
                  <h3>TRAVELING</h3>
                <h4>Bike</h4>
                <p>
                  Traveling means giving yourself and your mind a break from the monotonous pattern of life, each one of us live day in and out. When you travel, you look forward to an iconic experience that makes your trip worthwhile and memorable.
                </p>
  
                  </div>
                  
              </Carousel></center>
              
            </div>
            </Container>
            
            </div>
            
            
            
    );
}



