import MobileNavbar from '@/components/ui/MobileNavbar';
import Sidebar from '@/components/ui/Sidebar';
import Image from 'next/image';
import React from 'react';

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const loggedIn = { firstName: 'Naimul', lastName: 'Islam' };
	return (
		<main className="flex h-screen w-full font-inter">
			{/* sidebar */}
			<Sidebar user={loggedIn} />

			{/* mobile nav bar */}

			<div className="flex size-full flex-col">
				<div className="root-layout">
					<Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
					<div>
						<MobileNavbar user={loggedIn} />
					</div>
				</div>

				{children}
			</div>
		</main>
	);
}
