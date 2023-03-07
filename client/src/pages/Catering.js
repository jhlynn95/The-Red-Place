import React from 'react'
import { Typography, Card, CardContent, Grid, TextField, Button } from '@mui/material';

function Catering() {
  return (
    <div ClassName="App">
      <Typography gutterButton varient="h1" align="center">
        Interested in having us at your next event? Fill out the form below
      </Typography>
      <Card style= {{maxWidth: 450, margin: "0 auto", padding: "20px 5px"}}>
        <CardContent>
          <Typography gutterBottom variant = "h5"> Book Us </Typography>
          <Typography color = "textSecondary" variant = "body2" component ="p"> Fill out the form below, and our team will reach out to you. Please list the date the event is scheduled. </Typography>
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
              <TextField type="event" label="Event" placeholder="What type of event is it?" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <TextField type="Date" label="" placeholder=" Please Enter the Event's date " variant="outlined" fullWidth />
            </Grid>
            <Grid xs={12} item>
              <TextField type="number" label="Phone" placeholder="Enter Phone Number" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <TextField label="Inquiry" multiline rows={4} placeholder="Please provide more information of the event here. " variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <Button type="submit" variant="contained" color="primary" fullWidth> Submit </Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Catering;