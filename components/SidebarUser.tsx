
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { PageWrapper } from './PageWrapper';
import { FiChevronRight } from 'react-icons/fi';
import { useAuth } from '@/context/AuthContext';
import { LoginType } from '@/types/AuthTypes';
import Link from 'next/link';

const SidebarUser = () => {
return (

<div className="w-64 bg-gray-800 text-white flex flex-col">
<div className="p-6 text-xl font-bold">Dashboard</div>
<nav className="flex flex-col space-y-4 p-6">
<Link href="/dashboard">
<span className="hover:bg-gray-700 p-2 rounded">Surveys</span>
</Link>
<Link href="#">
<span className="hover:bg-gray-700 p-2 rounded">Opportunities</span>
</Link>
<Link href="#">
<span className="hover:bg-gray-700 p-2 rounded">Profile</span>
</Link>
</nav>
</div>
)

}

export default SidebarUser;

