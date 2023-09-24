import { NextResponse,NextRequest } from "next/server";
import clientPromise from "@/app/lib/mongo";

const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://castplus.vercel.app/'

export async function GET(req) {
	const client = await clientPromise
	var db = client.db('castplus')
	var doc = await db.collection('podcasts').find().toArray()
	return NextResponse.json(doc)
}