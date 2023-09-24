import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongo";


export async function DELETE(req) {
	const client = await clientPromise
	var db = client.db('castplus')
	const { email } = await req.json();
	var user = await db.collection("user_profile").deleteOne(
		{
			email: email,
		},
	  );

	return NextResponse.json(user)
}
