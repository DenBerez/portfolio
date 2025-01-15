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
import { post } from '@aws-amplify/api';

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
      const response = await post(
        {
          apiName: 'contactAPI',
          path: '/contact',
          options: {
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              message
            })
          }
        }
      )
      console.log(response);

      setSnackbarMessage('Message sent successfully!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      form.current?.reset();
    } catch (error) {
      console.error('Error sending message:', error);
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