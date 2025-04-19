import connectMongoDB from "../../../../../../config/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";

interface RouteParams {
  params: { userId: string };
}

export async function GET(_: Request, { params }: RouteParams) {
  const { userId } = params;
  await connectMongoDB();

  const items = await Item.find({ userIdentification: userId });

  return NextResponse.json({ items }, { status: 200 });
}
