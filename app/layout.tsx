import { Inter } from 'next/font/google';
import '@styles/global.css';

const inter = Inter({ subsets: ['latin'] });

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Calendrier de l\'avent',
	description: 'Calendrier de l\'avent de maths de la 3M03',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
		<head><title></title><meta name="viewport" content="viewport-fit=cover" /></head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
