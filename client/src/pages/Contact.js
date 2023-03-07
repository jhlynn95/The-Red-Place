import React from 'react'
import { Typography, Card, CardContent, Grid, TextField, Button } from '@mui/material';

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
      <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                33280 Newport Rd, <br />
                Winchester, CA 92596
              </p>
            </div>
    </div>
    </div>
    </div>
  );
}

export default Contact;