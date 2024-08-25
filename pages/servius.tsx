import ProtectedRoute from '@/components/ProtectedRoute';
import Sidebar from '@/components/Sidebar';
import { useAuth } from '@/context/AuthContext';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const servius = () => {
	const { user, logOut } = useAuth();
	const router = useRouter();

	const jobListings = Array.from({ length: 20 }, (_, index) => ({
		id: index + 1,
		title: `Job Title ${index + 1}`,
		company: `Company ${index + 1}`,
		location: `Location ${index + 1}`,
	  }));
	return (
		<>
			<Head>
				<title>Dashboard - Firebase Authentication With Next.js</title>
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



		<>
		<div className="flex min-h-screen bg-gray-100">
		
	
		<Sidebar />
      {/* Sidebar */}
      {/* Main content */}
      <main className="flex-1 p-6 bg-black">
        <Image src='/surve.png' width={1200} height={100}/>
      </main>
    </div>
		</>
		</>
	);
};

export default servius;
