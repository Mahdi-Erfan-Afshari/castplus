import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongo";

export async function GET(req) {
	const client = await clientPromise
	var db = client.db('castplus')
	var doc = await db.collection('user_profile').find().toArray()
	return NextResponse.json(doc)
}