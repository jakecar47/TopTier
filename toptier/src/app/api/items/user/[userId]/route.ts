import connectMongoDB from "../../../../../../config/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";

// Define the RouteParams type as a userID string  
interface RouteParams {
  params: { userId: string };
}

// Get function to fetch userID items
export async function GET(_: Request, context: { params: { userId: string } }) {
  const { userId } = context.params; 
  await connectMongoDB();

  const items = await Item.find({ userIdentification: userId });

  return NextResponse.json({ items }, { status: 200 });
}