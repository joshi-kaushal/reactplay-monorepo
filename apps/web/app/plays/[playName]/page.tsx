"use client"

import dynamic from "next/dynamic";
import Head from "next/head";


export default function Play({ params }: { params: { playName: string } }) {
	const { playName } = params

	const Play = dynamic(() => import(`../../../../../packages/${playName}/dist/index`), {
		loading: () => <div>Loading play...</div>,
		ssr: false,
	});

	return (
		<>
			<h1>{playName}</h1>
			<Play />
		</>
	)
}