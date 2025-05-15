const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample menu data
const menuItems = [
  {
    id: 1,
    name: 'Classic Margherita Pizza',
    description: 'Fresh tomatoes, mozzarella cheese, basil, and olive oil on crispy thin crust.',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1601924582970-2a2ddc575626?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with pancetta, egg, parmesan, and black pepper.',
    price: '$14.50',
    image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb27?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Grilled Salmon with Veggies',
    description: 'Perfectly grilled salmon served with seasonal vegetables and lemon butter sauce.',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Caesar Salad',
    description: 'Crisp Romaine lettuce with Caesar dressing, croutons, and parmesan cheese.',
    price: '$9.99',
    image: 'https://images.unsplash.com/photo-1559622216-8e83fd23f8b0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
    price: '$7.50',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
  },
];

// Routes

// GET /api/menu - return menu items
app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

// POST /api/contact - handle contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  // In a real app, you would save this to a database or send email.
  console.log('Contact Form Submission:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  return res.json({ success: true, message: 'Thank you for contacting us!' });
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server listening on port \${PORT}\`);
});

