import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
	return (
		<>
			<Head>
				<title>ABC</title>
				<meta
					name="description"
					content="Learn how to implement Google Firebase Authentication in your React, Next.js, TypeScript projects."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="px-4 m-0 bg-gradient-to-br from-primary-color to-blue-400">
				<div className="flex justify-center items-center min-h-screen">
				<div className="space-x-4">
				<Link href='/login-student' className="bg-blue-500 text-white px-4 py-2 rounded">Login as Student</Link>
				<Link href='/login-company' className="bg-green-500 text-white px-4 py-2 rounded">Login as Employer</Link>
		
				</div>
				</div>
			</main>
		</>
	);
}
