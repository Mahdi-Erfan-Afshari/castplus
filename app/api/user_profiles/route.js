import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongo";

export async function GET(req) {
	const client = await clientPromise
	var db = client.db('castplus')
	var doc = await db.collection('user_profile').find().toArray()
	return NextResponse.json(doc)
}

export async function POST(req) {
	const client = await clientPromise
	var db = client.db('castplus')
	const { email, name, favorites } = await req.json();
	var user = await db.collection("user_profile").insertOne({
		email,
		name,
		favorites,
	});

	return NextResponse.json(user)
}
