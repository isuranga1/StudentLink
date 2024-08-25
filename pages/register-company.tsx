import RegistrationForm from '@/components/RegistrationFormCompany';
import RegistrationFormCompany from '@/components/RegistrationFormCompany';
import Head from 'next/head';
import React from 'react';

const register = () => {
	return (
		<>
			<Head>
				<title>Company</title>
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

			<main className="px-4 m-0 bg-gradient-to-br from-primary-color to-blue-400 min-h-screen">
				<RegistrationFormCompany />
			</main>
		</>
	);
};

export default register;
