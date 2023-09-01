import { NextResponse } from "next/server";
import Podcasts from '../server.json'

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get('query');
	const filteredPodcasts = Podcasts.filter((podcast) => {
		return podcast.name.toLowerCase().includes(query.toLowerCase());
	})
	return NextResponse.json(filteredPodcasts);
}