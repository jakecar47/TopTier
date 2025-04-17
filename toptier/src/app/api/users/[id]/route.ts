import connectMongoDB from "../../../../../config/mongodb";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";

// RouteParams interface
interface RouteParams {
    params: { id: string };
}

// GET function to return user by id
export async function GET(request: NextRequest, { params }: RouteParams) {
    const { id } = await params;
    await connectMongoDB();
    const user = await User.findOne({ _id: id });
    return NextResponse.json({ user }, { status: 200 });
}

{/* Dont need these, but they are here just incase
// PUT function to update user
export async function PUT(request: NextRequest, { params }: RouteParams) {
    const { id } = await params;
    const { username: username, password: password } = await request.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(id, { username, password });
    return NextResponse.json({ message: "Item updated" }, { status: 200 });
}

// DELETE function to delete user
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    const { id } = await params;

    // Ensure the user id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
    }

    // Attempt to delete the user
    await connectMongoDB();
    const deletedItem = await User.findByIdAndDelete(id);

    // Print error message if the delete failed
    if (!deletedItem) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    // Print successful delete message
    return NextResponse.json({ message: "Item deleted" }, { status: 200 });
} */}