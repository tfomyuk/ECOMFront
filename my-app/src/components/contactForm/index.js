import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FormContainer } from "../../styles/contactForm";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const [submited, setSubmited] = useState(false)

  function handleSubmit() {
    const data = { name, email, number, message };

    console.log(data);

    emailjs.init('nNUh92pymueYx1tpE')

    emailjs.send("contact_service", "template_ru0grdp", data ).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setSubmited(true)
      },
      function (err) {
        console.log("FAILED...", err);
      }
    );
  }

  return (
    <FormContainer >
    {/*<FormImage src='/images/banner/jetcat.jpg'/>*/}
      <Grid >
        <Card
          style={{
            minWidth: "50px",
            maxWidth: "700px",
            height: "700px",
            padding: "20px 20px",
            margin:  "auto",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h6">
              Contact Us
            </Typography>

            <Typography
              variant='body2'
              color="textSecondary"
              component="p"
              gutterBottom
            >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam arcu, placerat vitae pulvinar ac, maximus et urna. Aenean arcu purus, facilisis vel feugiat vitae, dapibus et ex. Suspendisse lacinia, enim nec commodo accumsan, est ligula ultrices ligula, quis pellentesque purus lectus eu purus. 
            </Typography>

            <Grid container spacing={2}>
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder="Your first name"
                  label="First Name"
                  variant='standard'
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder="Your last name"
                  label="Last Name"
                  variant='standard'
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  placeholder="Your email"
                  label="Email"
                  variant='standard'
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  placeholder="Your phone number"
                  label="Phone"
                  variant="standard"
                  fullWidth
                  required
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={8}
                  placeholder="Type your message here"
                  variant="standard"
                  fullWidth
                  required
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
               {submited ? <p>Thank you for your message! Our team will get back to you soon! </p> : <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={handleSubmit}
                  style={{ backgroundColor: "#D5E7B8", color: "#254E25" }}
                >
                  Submit
                </Button>}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </FormContainer>
  );
};
