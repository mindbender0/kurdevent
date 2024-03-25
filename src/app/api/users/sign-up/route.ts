import { connect } from '@/lib/mongodb';
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

// Calls the connect function to establish a connection to the database.
connect();

// Defines an asynchronous POST request handler.
export async function POST(request: NextRequest) {
  try {
    // Parses the request body to extract username, email, and password.
    const { name, username, email, password } = await request.json();

    //Checks if a user with the provided email already exists.
    const user = await User.findOne({ email });

    //If yes, returns a 400 response.
    if (user) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    //hash password using bcryptjs.
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
    });

    // Saves the new user to the database.
    const savedUser = await newUser.save();

    return NextResponse.json({
      message: 'User created successfully',
      success: true,
      status: 200,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
