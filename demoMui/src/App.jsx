// import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AppBar, Box, CardHeader, Container, Toolbar } from '@mui/material';

import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <hr />
    <AppBar position="static">
            <Container>
                <Toolbar>                
                    <Button color="inherit" component={Link} to="/">HOME</Button>
                    <Button color="inherit" component={Link} to="/dashboard">DASHBOARD</Button>
                    <Button color="inherit" component={Link} to="/contact">CONTACT</Button>
                </Toolbar>
            </Container>
        </AppBar>
    </Router>
  )
}

export default App
