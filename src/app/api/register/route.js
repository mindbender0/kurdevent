import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
// import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { fullname, username, email, password } = await req.json();

    // const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();
    await User.create({ fullname, username, email, password });

    return NextResponse.json({ message: 'User registered' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'An error ocurred while registering the user.' },
      { status: 500 }
    );
  }
}
