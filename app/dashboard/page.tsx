import prisma from '@/lib/prisma';
import ActiveCard from './ActiveCard';
import { getAuthServerSession } from '@/lib/authenticate';
import { red } from 'next/dist/lib/picocolors';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
	const authSession = await getAuthServerSession();
	console.log(authSession);
	if (!authSession || !authSession.user.isTeacher) return redirect('/');

	const tests = await prisma.test.findMany({ select: { isActive: true, isPassed: true, id: true, testOf: { select: { id: true, firstName: true, lastName: true, isTeacher: true } } } });

	const activeTests = tests.filter((test) => test.isActive);
	const passedTests = tests.filter((test) => test.isPassed);

	return (
		<div>
			<h1>Dashboard</h1>
			<div className="border-2 border-white rounded-2xl bg-red-500 p-2">
				<h2>Test(s) Actif(s) :</h2>
				<ul>
					{activeTests.map((test) => (
						<li key={test.id}>
							{test.testOf.firstName + ' ' + test.testOf.lastName} <ActiveCard />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
