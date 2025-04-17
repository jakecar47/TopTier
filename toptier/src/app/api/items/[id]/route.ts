import connectMongoDB from "../../../../../config/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";

// RouteParams interface
interface RouteParams {
    params: { id: string };
}

// GET function to return item by id
export async function GET(request: NextRequest, { params }: RouteParams) {
    const { id } = await params;
    await connectMongoDB();
    const item = await Item.findOne({ _id: id });
    return NextResponse.json({ item }, { status: 200 });
}

// PUT function to update items
export async function PUT(request: NextRequest, { params }: RouteParams) {
    const { id } = await params;
    const { userIdentification: userIdentification, game: game, winCount: winCount } = await request.json();
    await connectMongoDB();
    await Item.findByIdAndUpdate(id, { userIdentification, game, winCount });
    return NextResponse.json({ message: "Item updated" }, { status: 200 });
}

// DELETE function to delete items
export async function DELETE(request: NextRequest, { params }: RouteParams) {
    const { id } = await params;

    // Ensure the item id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
    }

    // Attempt to delete the item
    await connectMongoDB();
    const deletedItem = await Item.findByIdAndDelete(id);

    // Print error message if the delete failed
    if (!deletedItem) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    // Print successful delete message
    return NextResponse.json({ message: "Item deleted" }, { status: 200 });
}