import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files like CSS from the 'css' folder
app.use('/css', express.static(path.join(__dirname, '..', 'css')));

// Serve the 'index.html' from the 'html' folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'html', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
