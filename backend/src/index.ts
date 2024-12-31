import express from 'express';
import prisma from './prisma.js';

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    // @ts-ignore
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving users');
  }
});

app.post('/users', async (req, res) => {
  const { name, email, location } = req.body;
  try {
    // @ts-ignore
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        location,
      },
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating user');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

