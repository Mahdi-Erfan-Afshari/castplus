import { NextResponse } from "next/server"
import podcasts from "./server.json"

export async function GET(request) {
    return NextResponse.json(podcasts)
}
