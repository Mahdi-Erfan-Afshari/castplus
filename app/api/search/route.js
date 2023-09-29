import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongo";

export async function POST(request) {
	const { query } = await request.json();
	const client = await clientPromise
	let db = client.db('castplus')
	const filteredPodcasts = await db.collection('podcasts').find({"name":{$regex: query}}).toArray()
	return NextResponse.json(filteredPodcasts);
}