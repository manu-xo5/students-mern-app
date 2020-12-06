import Express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config.js';
import StudentsRoutes from './api/students.js';
import AuthRoutes from './api/auth.js';
import MeRoutes from './api/me.js';

const app = Express();
const PORT = process.env.PORT || 5000;
const MONGORUI = process.env.MONGO_URI;

app.use(Express.json());
app.use('/auth', AuthRoutes);
app.use('/me', MeRoutes);
app.use('/students', StudentsRoutes);

async function main() {
  try {
    await mongoose.connect(MONGORUI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('mongoose connected');

    app.listen(PORT, () => console.log(`expressing listening ${PORT}`));
  } catch (error) {
    console.error(error.message);
  }
}
main();
