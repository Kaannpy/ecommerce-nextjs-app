import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db/mongodb';
import { User } from '@/lib/db/models/User';



export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return NextResponse.json({ success: false, error: 'missing requirements' });
  }

  await connectToDatabase();


  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ success: false, error: 'User not found' });
  }


  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return NextResponse.json({ success: false, error: 'incorrect password' });
  }


  return NextResponse.json({ success: true, name: user.name, email: user.email });
} 