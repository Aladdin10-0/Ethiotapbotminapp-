const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const User = require('./user');

app.post('/tap', async (req, res) => {
  const { id } = req.body;
  let user = await User.findOne({ tgId: id });
  if (!user) user = await User.create({ tgId: id, coins: 0 });
  user.coins += 1;
  await user.save();
  res.json({ coins: user.coins });
});

app.listen(3000, () => console.log('Server running on port 3000'));
