import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://castplus.vercel.app/'

export async function GET(req) {
	const URI = process.env.MONGODB_URI
	const client = new MongoClient(URI)
	var db = client.db('castplus')
	var doc = await db.collection('podcasts').find().toArray()
	return NextResponse.json(doc)
}