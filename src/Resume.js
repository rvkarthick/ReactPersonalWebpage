import React from 'react';
import './App.css';
import AppBar  from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar';
import Typography from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Resume(){
    return(
        <div class="Resume">
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

            <Container fixed>
                <center>
                <Button variant="contained" style={{backgroundColor:'#FFF5F4',color:'black'}}><b>Resume</b></Button>
          <p>The purpose of a resume summary is to introduce yourself and convince the hiring manager to read the rest of the resume.</p>
                </center><hr/>
                
            <Grid container spacing={2}>
  <Grid item xs={6}>
        <h4>CAREER OBJECTIVE:</h4>
              <p><em>To work in the most challenging position with an organization that provides good opportunities to learn and to contribute and achieve organizational goal.</em></p>
              <p>
              <ul>
                <li>Achievable</li><br/>
                <li>Realistic</li><br/>
                <li>Time-Bound</li><br/>
              </ul>
              </p>
  </Grid>
  <Grid item xs={6}>
  <h4>CO-CURRICULAR ACTIVITIES:</h4>
              
              <p><em>In College Days</em></p>
              <p>
              <ul>
                <li>Attended a workshop on “Ethical Hacking & LI-FI” in SNS College of Engineering, Coimbatore.</li>
                <li>Attended a workshop on “Networking & Hardware Troubleshooting” in SNS College of Engineering, Coimbatore.</li>
                <li>Attended a workshop on “Developing a Mobile Application Using Android Studio” in Coimbatore Institute of Engineering And Technology, Coimbatore.</li>
                <li>Attended an Entrepreneurship Awareness Camp (EAC) on “National Science & Technology of Entrepreneurship Development Board and Entrepreneurship” in United Institute Of Technology Coimbatore.</li>
              </ul>
              </p>
  </Grid>
  <Grid item xs={6}>
  <h3 >Education</h3>
            
              <h4>MSC(CSA)</h4>
              
              <h5>2017 - 2021</h5>
              <p><em>Sri Ramakrishna Mission Vivekananda University, Coimbatore</em></p>
              <p>Ramakrishna Mission Vivekananda College began its humble march with 20 teachers and 339 students with the prime motive of imparting man-making and character-building education and combining the principles of secular knowledge and spiritual knowledge.</p>
  </Grid>
  <Grid item xs={6}>
  <h4>ACHIEVEMENTS:</h4>
              <p>
              <ul>
                <li>Graduated with a first-class honours degree</li>
                <li>Won an award for punctuality</li>
                <li>Won the “Early Submission of Assignment” award</li>
                <li>Achived 100% Attendance award</li>
              </ul>
              </p>
  </Grid>
  <Grid item xs={6}>
  <h4>DIPLOMA</h4>
  <h5>2014 - 2017</h5>
              <p><em>Diploma In Information Technology</em></p>
              <p>Ramakrishna Mission Vidyalaya, Coimbatore, is an educational centre of Ramakrishna Mission. It is 19 km from Coimbatore City on the highway to Ootacamund, and is situated in an environment spread over about 300 acres.</p>
  </Grid>
  <Grid item xs={6}>
  <h4>MY STRENGTHS:</h4>
              <p>
              <ul>
                <li>Punctuality</li>
                <li>Adaptability</li>
                <li>Logical thinking</li>
                <li>Creative thinking </li>
                <li>Effective communication</li>
                <li>Problem solving</li>
                <li>Teamwork</li>
              </ul>
              </p>
  </Grid>
  <Grid item xs={6}>
  <h4>SCHOOL</h4>
              <h5>2014</h5>
              <p><em>Sister Alphonsa School(CBSE)
                </em></p>
              <p>Founded in 1976, Sister Alphonsa School is a Secondary School, affiliated to CBSE. Affiliation ID is 1930103. Address of the school is: Kundah Bridge Post</p>
  </Grid>
  <Grid item xs={6}>
  <h4>DECLARATION:</h4>
              <p>
                I hereby declare that the above-mentioned information is correct up to my knowledge and I bear the responsibility for the correctness of the above-mentioned particular.
              </p>
  </Grid>
</Grid>
</Container>
          
            

            </div>
            
            
            
    );
}



