import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import Winchester from '../imgs/Winchester.png';
import { Typography, Card, CardContent, Grid, TextField, Button } from '@mui/material';
import '../styles/Contact.css';

function Contact() {
  return (
    <div ClassName="App">
      <Typography gutterButton varient="h1" align="center">
        Fill out the form below
      </Typography>
      <Card style= {{maxWidth: 450, margin: "0 auto", padding: "20px 5px"}}>
        <CardContent>
          <Typography gutterBottom variant = "h5"> Contact Us </Typography>
          <Typography color = "textSecondary" variant = "body2" component ="p"> Fill out our form with any questions, concerns, or feedback! </Typography>
          <form>
          <Grid container spacing={1}>
            <Grid xs={12} sm={6} item>
              <TextField label="First Name" placeholder="Enter First Name" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label="Last Name" placeholder="Enter Last Name" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <TextField type="email" label="Email" placeholder="Enter Email" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <TextField type="number" label="Phone" placeholder="Enter Phone Number" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <TextField label="Message" multiline rows={4} placeholder="Type Message Here" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <Button type="submit" variant="contained" color="primary" fullWidth> Submit </Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>

      <h2 className='location'> Our Location and Business Hours </h2>
      <p className='hours'> Saturdays: 8:00am till 3:00pm </p>
      <p className='hours'> Sundays: 8:00am till 3:00pm </p>
      <PlaceIcon className='placeIcon' onClick={event => window.location.href='https://goo.gl/maps/1jRJu99o8sjmXKUKA'} />
      <img className='winchesterimg' src={Winchester} alt='location' />
    </div>
  );
}

export default Contact;