import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import {NavLink} from 'react-router-dom';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';


import brkf from './img/breakfast.jpg'
import lunc from './img/lunch.jpg'
import dinn from './img/dinner.jpg'
import dho from './img/ms.jpg'
import footbal from './img/ronaldo.jpg'
import volly from './img/volleybal.jpg'
import badmat from './img/sainaa.jpg'
import favor from './img/favna.jpg'
import Bike from './img/bike.jpg';
import Bus from './img/bus.jpg'
import train from './img/train.jpg'
import don from './img/don.jpg'
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';




import HomeIcon from '@mui/icons-material/Home';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import Player from 'react-media-viewer';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const App = () => (
  <Player url="./video/Tamil-Love-Whatsapp-Status-Video-Song-Download-2021-1.mp4"/>
);


export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='fav'>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" color='inherit' open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 10,
              
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{flexGrow:0.1}} >
          <NavLink to="/" style={{textDecoration:"none" , color:"black"}}> Home</NavLink>

                    </Typography>
                    <Typography variant="h6" component="div" sx={{flexGrow:0.1}}>
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
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <HomeIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        
        {[].map((text, index) => (
          <ListItem key={text} disablePadding>
            
              
                {/* {index % 10 === 5 ? <HomeIcon /> : <PersonIcon /> } */}
              
              <ListItemText primary={text} />
            
          </ListItem>
        ))}




        <List>
              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <DinnerDiningIcon /> 
              </ListItemIcon>
              <ListItemText primary={<Typography><a href='#food'>Food</a></Typography> } />
              </ListItemButton>
              </ListItem>

              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <SportsCricketIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography><a href='#sports'>Sports</a></Typography> } />
              </ListItemButton>
              </ListItem>

              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <LocalCarWashIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography><a href='#tranp'>Transports</a></Typography> } />
              </ListItemButton>
              </ListItem>


              {/*<ListItem>
              <ListItemButton>
              <ListItemIcon>
              <OndemandVideoIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography><a href='sports'>Video</a></Typography> } />
              </ListItemButton>
        </ListItem>*/}
  

              <ListItem>
              <ListItemButton>
              <ListItemIcon>
              <AudiotrackIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography><a href='#audio'>Audio</a></Typography> } />
              </ListItemButton>
              </ListItem>

              
              




              </List> 
              </List>
      </Drawer>
      <Container fixed>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <center><Button variant="contained" style={{backgroundColor:'#FFF5F4',color:'black'}}><b>Favorite   </b></Button>

     <p style={{fontStyle:'italic', color:'gray'}}>Favorite is a person or thing that is best liked or treated in a special way.</p><br/>
     <img src={favor} width='650px' />
     </center><br/><br/><br/><br/><br/>
    

        <div id="food">
          
        <center> <h1 >Food</h1></center>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>BreakFast</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <p >Breakfast is the first meal of the day eaten after waking from the night's sleep, in the morning. The word in English refers to breaking the fasting period of the previous night.There is a strong likelihood for one or more "typical", or "traditional", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.</p>
                     <ul>
                         <li><b>Ven Pongal</b></li>
                         <li><b>Medu Vada</b></li>
                         <li><b>Idiyappam</b></li>
                     </ul>
  </Grid>
  <Grid item xs={6}>
  <img src={brkf} width='350px'  />

  </Grid>
  
</Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Lunch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <img src={lunc} width='225px'  />

  </Grid>
  <Grid item xs={6}>
  <p>Lunch is an important meal for everyone. It provides energy and nutrients to keep the body and brain working efficiently through the afternoon</p>
                      <ul>
                        <li><b>Meals</b></li>
                        <li><b>Briyani</b></li>
                        <li><b>Sambar sadham</b></li>
                    </ul>

  </Grid>
  
</Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Dinner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <p>Dinner is defined as the largest meal of the day, often eaten in the evening after you have already had breakfast and lunch. An example of dinner is when you go out to a restaurant at 7:00 PM and eat a meal. noun. 3. The chief meal of the day, eaten in the evening or at midday.</p>
                        <ul>
                          <li><b>Chapati</b></li>
                          <li><b>Dosa</b></li>
                          <li><b>Sambar sadham</b></li>
                      </ul>
  </Grid>
  <Grid item xs={6}>
  <img src={dinn} width='250px'  />

  </Grid>
  
</Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div><br/><br/><hr/><br/>
  
     
          <div id='sports'>
        <center><h1>Sports</h1></center>
       <Typography paragraph>
       <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 400,marginLeft:11
        },
      }}
    >
      <Paper variant="outlined" ><h1 >MS Dhoni</h1>
              <h3 >Cricket Player</h3>
              <p >Mahendra Singh Dhoni (born 7 July 1981) is an Indian professional cricketer who was captain of the Indian national cricket team
                 in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. 
                 He is a right-handed wicket-keeper batsman.He led the team to three ICC trophies including
                  the 2007 ICC World Twenty20, 2011 ICC Cricket World Cup and 2013 ICC Champions Trophy. Under
                   his captaincy, India won the Asia Cup two times, in 2010 and 2016. India also won ICC Test 
                   Championship Mace two times in 2010 and 2011 under his leadership.</p></Paper>
      <Paper variant="outlined"  >
      <img src={dho} width='400px' height='400px' />

      </Paper>
    </Box><br/>
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 400,marginLeft:11
        },
      }}
    >
      <Paper variant="outlined" >
      <img src={footbal} width='400px' height='400px' />

      </Paper>
      <Paper variant="outlined"  >
<h1>Cristiano Ronaldo</h1>
              <h3>Football Player</h3>
              <p >Cristiano Ronaldo dos Santos Aveiro GOIH ComM (born 5 February 1985) is a 
              Portuguese professional footballer who plays as a forward for Premier League club Manchester United 
              and captains the Portugal national team. Often considered the best player in the world and widely 
              regarded as one of the greatest players of all time, Ronaldo has won five Ballon awards
               and four European Golden Shoes.He has won 32 trophies in his career, 
               including seven league titles,five UEFA Champions Leagues,one UEFA European Championship. </p>
      </Paper>
    </Box><br/>
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 400,marginLeft:11
        },
      }}
    >
      <Paper variant="outlined" ><h1>Ivan Zaytsev</h1>
              <h3 >Volleyball Player</h3>
              <p>Ivan Vyacheslavovich Zaytsev (born 2 October 1988), nicknamed lo Zar ("the Tsar"),
               is an Italian volleyball player of Russian origin, the captain of Italy men's national volleyball team, 
               a bronze medalist of the Olympic Games London 2012, silver medalist of the European Championship (2011, 2013),
                bronze medalist of the World League (2013, 2014), Italian Champion (2014) and silver medalist of the Olympic 
                Games Rio 2016.He started his career as a setter in 2004.
                 He played in Serie A1 at 16 year. His first club was RPA-LuigiBacchi.</p></Paper>
      <Paper variant="outlined"  >
      <img src={volly} width='400px' height='400px' />

      </Paper>
    </Box><br/>
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 400,marginLeft:11
        },
      }}
    >
      <Paper variant="outlined" >
      <img src={badmat} width='400px' height='400px' />

      </Paper>
      <Paper variant="outlined"  >
      <h1 >Saina Nehwal</h1>
              <h3 > Badminton Player</h3>
              <p >Saina Nehwal (born 17 March 1990) is an Indian professional badminton player.
                 A former world no. 1, she has won 24 international titles, which includes ten Superseries titles.
                  Although she reached the world's 2nd in 2009, it was only in 2015 that she was able to attain the
                   world no. 1 ranking, thereby becoming the only female player from India and overall the second 
                   Indian player  after Prakash Padukone to achieve this feat.She has represented India three times
                    in the Olympics, winning a bronze medal in her second appearance at the London 2012.</p>
      </Paper>
    </Box><br/>
        </Typography>
        </div><br/><hr/><br/>
        <div id="tranp">
        <center><h1>Transports</h1></center><br/>
        <Grid container spacing={2}>
  <Grid item xs={4}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Bus}
          alt="bus"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bus
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>Is less stressful. Rather than driving in traffic, you can use the time that you
           spend moving from one place to another by bus to do other things, such as reading, advancing some work,
            taking a nap, listening to music. Travelling by bus is cheaper than owning and operating a car.</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Bike}
          alt="bike"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bike
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>It's the bonding hormone, increasing feelings of empathy and connectedness.
          The boost you get mirrors the benefits of meditation. Alpha brainwaves increase, leaving you feeling
           serene.the more of them you release. Exercise really can become like a drug.</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={train}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Train
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>In a train journey,one can spend time reading something,listening to music, 
          watching videos,sleeping/resting comfortably,etc.To sum it up, train journeys are truly one of a kind.
           The train journey offers uniqueness like no other journey.the charm of such a journey.</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
</Grid>
</div><br/><br/><hr/>
<div id="audio">
<center><h1 style={{fontSize:'70px'}}>Audio</h1></center>
<center><Card className='don' style={{width:'30em'}}   >

      <CardContent>
        
        <Typography variant="h15" component="div">
        <center><h1 style={{color:'DarkRed',fontSize:'40px',backgroundColor:'gray'}}>DON</h1></center>
          <ul style={{color:'DarkBlue'}}>
            <li><h3 style={{backgroundColor:'yellow'}}><strong>Starring:</strong> Sivakarthikeyan, Priyanka Mohan, SJ Suryah, Samuthirakani, Soori</h3></li>
            <li><h3 style={{backgroundColor:'yellow'}}><strong>Music:</strong> Anirudh Ravichander</h3></li>
            <li><h3 style={{backgroundColor:'yellow'}}><strong>Director:</strong> Cibi Chakaravarthi</h3></li>
            <li><h3 style={{backgroundColor:'yellow'}}><strong>Lyrics:</strong> Rokesh, Vignesh Shivan, Sivakarthikeyan</h3></li>
            <li><h3 style={{backgroundColor:'yellow'}}><strong>Year:</strong> 2022</h3></li>
            <li><h3 style={{backgroundColor:'yellow'}}><strong>Language:</strong> Tamil</h3></li>

          </ul>

          
          <center><ReactPlayer
        url={require("./music/Bae-Masstamilan.in.mp3")}
        width="300px"
        height="50px"
        playing={false}
        controls={true}
      /></center><br/>
       <center><ReactPlayer
        url={require("./music/Jalabulajangu-Masstamilan.in.mp3")}
        width="300px"
        height="50px"
        playing={false}
        controls={true}
      /></center><br/>
       <center><ReactPlayer
        url={require("./music/Private-Party-MassTamilan.in.mp3")}
        width="300px"
        height="50px"
        playing={false}
        controls={true}
      /></center>
      
        </Typography>
        
        
      </CardContent>
      
    </Card></center></div>


      </Box>
      </Container>
    </Box>
    </div>
    
  
  );
}
