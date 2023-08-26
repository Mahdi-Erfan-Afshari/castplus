import { NextResponse } from "next/server"
import podcasts from "./server.json"

const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://fluffy-sundae-2c87e7.netlify.app'

export async function GET(request) {
    return NextResponse.json(podcasts)
}
