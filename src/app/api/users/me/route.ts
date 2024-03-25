import { connect } from '@/lib/mongodb';
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/lib/get-data-from-token';

connect();

export async function GET(request: NextRequest) {
  try {
    // Extract user ID from the authentication token
    const userId = await getDataFromToken(request);

    // Find the user in the database based on the user ID
    const user = await User.findOne({ _id: userId }).select('-password');
    console.log(user);
    return NextResponse.json({
      message: 'User found',
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
