import connectMongoDB from "../../../../../../config/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";

interface RouteParams {
  params: { gameId: string };
}

export async function GET(_: Request, context: Promise<RouteParams>) {
  const { params } = await context;
  const { gameId } = params;

  await connectMongoDB();
  const items = await Item.find({ game: gameId });

  return NextResponse.json({ items }, { status: 200 });
}
