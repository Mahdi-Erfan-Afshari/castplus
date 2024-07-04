import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongo";

export async function GET(req) {
	const client = await clientPromise
	var db = client.db('castplus')
	var doc = await db.collection('podcasts').find().toArray()
	return NextResponse.json(doc)
}

export async function POST(req) {
	const client = await clientPromise
	var db = client.db('castplus')
	var user = await db.collection("podcasts").updateOne();

	return NextResponse.json(user)
}
