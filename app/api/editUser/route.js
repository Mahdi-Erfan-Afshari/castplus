import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongo";

export async function POST(req) {
	const client = await clientPromise
	var db = client.db('castplus')
	const { favorites, email } = await req.json();
	var user = await db.collection("user_profile").updateOne(
		{
			email: email,
		},
		{
		  $set: {
			favorites: favorites,
		  },
		}
	  );

	return NextResponse.json(user)
}
