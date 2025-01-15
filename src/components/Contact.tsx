import React, { useRef, useState } from 'react';
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  styled,
  Grid,
  Alert,
  Snackbar
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const StyledSection = styled(Box)(({ theme }) => ({
  padding: '5% 10%',
  textAlign: 'left',
  '& svg': {
    fontSize: '1em',
    verticalAlign: 'middle',
    marginRight: theme.spacing(0.5),
    color: theme.palette.text.primary,
  },
  [theme.breakpoints.down('md')]: {
    padding: '5%',
  }
}));

const StyledForm = styled('form')(({ theme }) => ({
  paddingTop: theme.spacing(2.5),
  width: '100%',
  '& .MuiButton-root': {
    float: 'right',
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#0d1116',
    color: theme.palette.mode === 'dark' ? '#0d1116' : '#ffffff',
    '& .MuiSvgIcon-root': {
      color: 'inherit'
    },
    transition: theme.transitions.create(['background-color', 'color'], {
      duration: theme.transitions.duration.shorter,
    }),
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
    }
  },
  '& .MuiTextField-root': {
    marginBottom: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
      backgroundColor: theme.palette.background.paper,
    },
    '& .MuiFormLabel-root': {
      color: theme.palette.text.primary,
    }
  }
}));

const SES_REGION = "YOUR_AWS_REGION"; // e.g., "us-east-1"
const SOURCE_EMAIL = "your-verified@email.com"; // Must be verified in SES
const DESTINATION_EMAIL = "your-destination@email.com"; // Must be verified in SES if in sandbox mode

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    try {
      const sesClient = new SESClient({ 
        region: SES_REGION,
        credentials: {
          accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID!,
          secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY!
        }
      });

      const command = new SendEmailCommand({
        Source: SOURCE_EMAIL,
        Destination: {
          ToAddresses: [DESTINATION_EMAIL],
        },
        Message: {
          Subject: {
            Data: `Portfolio Contact Form: Message from ${name}`,
            Charset: "UTF-8",
          },
          Body: {
            Text: {
              Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
              Charset: "UTF-8",
            },
          },
        },
      });

      await sesClient.send(command);
      
      setSnackbarMessage('Message sent successfully!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      form.current?.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbarMessage('Failed to send message. Please try again.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  return (
    <StyledSection id="contact">
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" gutterBottom>
        Feel free to reach out to me for any questions or opportunities!
      </Typography>

      <StyledForm ref={form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Name"
              name="user_name"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Email"
              name="user_email"
              type="email"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              label="Message"
              name="message"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </StyledForm>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert 
          onClose={() => setOpenSnackbar(false)} 
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </StyledSection>
  );
}

export default Contact;