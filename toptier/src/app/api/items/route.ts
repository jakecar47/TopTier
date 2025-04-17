import connectMongoDB from "../../../../config/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// GET function to return items
export async function GET() {
    await connectMongoDB();
    const items = await Item.find();
    return NextResponse.json({ items });
}

// POST function to create and add a new item to the items database (scores)
export async function POST(request: NextRequest) {
    const { userIdentification, game, winCount } = await request.json();
    await connectMongoDB();
    await Item.create({ userIdentification, game, winCount });
    return NextResponse.json({ message: "Item added successfully" }, { status: 201 });
}