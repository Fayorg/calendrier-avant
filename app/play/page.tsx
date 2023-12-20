import Image from 'next/image';
import Logo from '@images/logo.svg';
import { getAuthServerSession } from '@/lib/authenticate';
import { redirect } from 'next/navigation';
import { getFirstActiveTest } from '@/actions/mangeTest';
import { TodayTest } from './TodayTest';

export default async function Play() {
	const session = await getAuthServerSession();

	if (session == null) {
		redirect('/');
	}

	return (
		<div className={'w-full h-[100vh] text-[#F0F0F0] bg-black p-12 flex flex-col items-center justify-center gap-y-28'}>
			<Image src={Logo} alt={'Logo'} width={100} height={200} className={'mx-auto w-full md:w-[400px]'} />
			<TodayTest session={session} />
		</div>
	);
}
