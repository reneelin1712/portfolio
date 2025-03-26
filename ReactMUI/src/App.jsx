import { useState } from 'react';
import { 
  Box, 
  Button, 
  Container, 
  CssBaseline, 
  ThemeProvider, 
  Typography, 
  createTheme 
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#b69df3',
      },
      background: {
        default: darkMode ? '#0e0e1a' : '#fdfdfd',
        paper: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.85)',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '30px',
            padding: '12px 20px',
            border: '2px solid',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 0 10px #b69df3',
            },
            transition: 'all 0.3s ease',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={
            <Container maxWidth="md" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  backgroundColor: 'background.paper',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: { xs: 3, sm: 4 },
                  borderRadius: 4,
                  textAlign: 'center',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  width: '90%',
                  maxWidth: 600,
                  mx: 'auto',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 45px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => setDarkMode(!darkMode)}
                  sx={{
                    position: 'fixed',
                    top: 20,
                    right: 20,
                    minWidth: 'unset',
                  }}
                >
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </Button>

                <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: { xs: '2.2rem', sm: '3rem' } }}>
                  Renee Lin
                </Typography>
                <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
                  Data Scientist | Exploring interpretable AI & human behavior
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                  <Button variant="outlined" component={Link} to="/experience">
                    Experience →
                  </Button>
                  <Button variant="outlined" component={Link} to="/projects">
                    Projects →
                  </Button>
                  <Button variant="outlined" component={Link} to="/contact">
                    Contact →
                  </Button>
                  <Button variant="outlined" component={Link} to="/blog">
                    Blog →
                  </Button>
                </Box>
              </Box>
            </Container>
          } />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;