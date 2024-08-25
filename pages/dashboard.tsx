import ProtectedRoute from '@/components/ProtectedRoute';
import Sidebar from '@/components/Sidebar';
import { useAuth } from '@/context/AuthContext';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Dashboard = () => {
	const { user, logOut } = useAuth();
	const router = useRouter();

	const jobListings = Array.from({ length: 20 }, (_, index) => ({
		id: index + 1,
		title: `Job Title ${index + 1}`,
		company: `Company ${index + 1}`,
		location: `Location ${index + 1}`,
	  }));
	return (
		<ProtectedRoute>
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
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListings.map((job) => (
            <div key={job.id} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-700">{job.company}</p>
              <p className="text-gray-500">Location: {job.location}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
		</>
		</ProtectedRoute>
	);
};

export default Dashboard;
