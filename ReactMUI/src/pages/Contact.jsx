import { Box, Button, Container, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Contact() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Button
        component={RouterLink}
        to="/"
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4 }}
      >
        Back to Home
      </Button>

      <Typography variant="h3" component="h2" gutterBottom>
        Contact
      </Typography>
      
      <Typography paragraph>
        Email: <Link href="mailto:your@email.com">your@email.com</Link>
      </Typography>
      
      <Typography paragraph>
        LinkedIn: <Link href="https://linkedin.com/in/yourname" target="_blank" rel="noopener">
          linkedin.com/in/yourname
        </Link>
      </Typography>
    </Container>
  );
}