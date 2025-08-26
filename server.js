import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import route from './routes/route.js';
import cookieParser from 'cookie-parser';
import { createClient } from '@supabase/supabase-js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors())
app.use('/api', route);

const port = process.env.PORT || 3000;
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

 export const supabase = createClient(supabaseUrl, supabaseAnonKey);


async function upgradeUserToPremium(userId) {
  const { data, error } = await supabaseAdmin.auth.admin.updateUserById(
    userId,
    {
      user_metadata: { subscription: "premium" } // 👈 upgrade
    }
  );

  if (error) console.error(error);
  else console.log("User upgraded:", data);
}






mongoose.connect(process.env.MONGODB).then(()=>{
console.log("MONGOBD CONNECTED");

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)

});
})
