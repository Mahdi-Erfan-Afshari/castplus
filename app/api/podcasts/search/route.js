import { NextResponse } from "next/server";

const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://castplus.vercel.app/'

const fetchPodcasts = async () => {
	const res = fetch(`${server}/api/podcasts`)
	const data = (await res).json()
	return await data;
}

export async function GET(request) {
	const podcasts = await fetchPodcasts()
	const { searchParams } = new URL(request.url);
	const query = searchParams.get('query');
	const filteredPodcasts = podcasts.filter((podcast) => {
		return podcast.name.toLowerCase().includes(query.toLowerCase());
	})
	return NextResponse.json(filteredPodcasts);
}