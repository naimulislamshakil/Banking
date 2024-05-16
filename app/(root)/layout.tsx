import React from 'react';

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			{/* sidebar */}

			<div>{children}</div>
		</main>
	);
}
