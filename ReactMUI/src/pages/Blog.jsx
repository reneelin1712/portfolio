import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Link as MuiLink, 
  CircularProgress,
  Divider,
  Collapse
} from '@mui/material';
import { Link } from 'react-router-dom';
import NewPostForm from '../components/NewPostForm';
import { getBlogPosts, createNewPost } from '../services/contentful';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchPosts = async () => {
    try {
      const data = await getBlogPosts();
      console.log('Fetched posts:', data);
      setPosts(data);
      setError(null);
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to load posts. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleNewPost = async (postData) => {
    try {
      setLoading(true);
      const result = await createNewPost(postData);
      console.log('Creation result:', result);
      await fetchPosts();
      setShowForm(false);
    } catch (error) {
      console.error('Creation error:', error);
      setError('Failed to create post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: { xs: 2, sm: 3 }, minHeight: '80vh' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}>
        Blog
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <Button variant="outlined" component={Link} to="/">
          ← Back to Home
        </Button>
        <Button variant="contained" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'New Post'}
        </Button>
      </Box>

      <Collapse in={showForm}>
        <Box sx={{ mb: 4, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
          <NewPostForm onSubmit={handleNewPost} />
        </Box>
      </Collapse>

      <Divider sx={{ mb: 4 }} />

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 3, textAlign: 'center' }}>
          <Typography color="error">{error}</Typography>
          <Button variant="outlined" onClick={fetchPosts} sx={{ mt: 2 }}>
            Retry
          </Button>
        </Box>
      ) : posts.length === 0 ? (
        <Typography variant="body1" sx={{ textAlign: 'center', py: 4 }}>
          No blog posts yet. Check back soon!
        </Typography>
      ) : (
        posts.map((post) => (
          <Box key={post.id} sx={{ mb: 4, p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2, transition: 'all 0.3s ease', '&:hover': { boxShadow: 2, borderColor: 'primary.light' }}}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              {post.title}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom sx={{ mb: 2 }}>
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 2 }}>
              {post.excerpt}
            </Typography>
            <MuiLink component={Link} to={`/blog/${post.slug}`} color="primary" sx={{ display: 'inline-flex', alignItems: 'center', fontWeight: 500, '&:hover': { textDecoration: 'none' } }}>
              Read more →
            </MuiLink>
          </Box>
        ))
      )}
    </Box>
  );
};

export default Blog;