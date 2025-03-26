import { Box, Button, Container, Typography, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Experience() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Button
        component={Link}
        to="/"
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4 }}
      >
        Back to Home
      </Button>

      <Typography variant="h3" component="h2" gutterBottom>
        Work Experience
      </Typography>
      <List>
        <ListItem>
          <Typography>
            <strong>Data Analyst Intern</strong> – Vively Health (Apr–May 2024)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Graduate Software Engineer</strong> – DHI Water (Jan–Sep 2020)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Teaching Assistant</strong> – UQ (Mar–Jun 2020)
          </Typography>
        </ListItem>
      </List>
    </Container>
  );
}