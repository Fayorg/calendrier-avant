import { getAuthServerSession } from '@/lib/authenticate';
import { redirect } from 'next/navigation';

export default async function Layout({ children }: { children: React.ReactNode }) {
	const session = await getAuthServerSession();

	if (session == null) {
		redirect('/');
	}

	return <>{children}</>;
}
