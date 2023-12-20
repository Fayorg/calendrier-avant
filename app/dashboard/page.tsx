import prisma from '@/lib/prisma';
import { getAuthServerSession } from '@/lib/authenticate';
import { redirect } from 'next/navigation';
import { Tabs } from './Tabs';

export default async function Dashboard() {
	const session = await getAuthServerSession();
	console.log(session?.user);
	if (!session || !(session.user.isAdmin || session.user.isTeacher)) return redirect('/');

	const tests = await prisma.test.findMany({ select: { isActive: true, id: true, testOf: { select: { id: true, firstName: true, lastName: true, isTeacher: true } } } });

	const activeTests = tests.filter((test) => test.isActive);

	return (
		<div className="container flex flex-col gap-4 my-4">
			<h1 className="text-4xl text-white font-bold">Dashboard</h1>
			<Tabs />
		</div>
	);
}
