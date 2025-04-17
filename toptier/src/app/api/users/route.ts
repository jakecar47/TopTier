import connectMongoDB from "../../../../config/mongodb";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// GET function to return items
export async function GET() {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
}

// POST function to create and add a new item to the items database (scores)
export async function POST(request: NextRequest) {
    const { username, password } = await request.json();
    await connectMongoDB();
    await User.create({ username, password });
    return NextResponse.json({ message: "Item added successfully" }, { status: 201 });
}