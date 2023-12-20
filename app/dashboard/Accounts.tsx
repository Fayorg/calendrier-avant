import { getAccounts } from '@/actions/accounts';
import prisma from '@/lib/prisma';

export async function Accounts() {
	const users = await getAccounts({ take: 2 });

	console.log(users);

	return (
		<div>
			<h1 className="text-white">Accounts</h1>
		</div>
	);
}
