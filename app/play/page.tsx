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

	const now = new Date();
	const todayTest = await getFirstActiveTest(now);

	return (
		<div className={'w-full h-[100vh] text-[#F0F0F0] bg-black p-12 flex flex-col items-center justify-center gap-y-28'}>
			<Image src={Logo} alt={'Logo'} width={100} height={200} className={'mx-auto w-full md:w-[400px]'} />
			<TodayTest session={session} />
			{/* <TestCard data={data} error={error} isLoading={isLoading} /> */}
			{/* {data && data.status == 200 && password && <GradingForm password={password} data={data} />} */}
			{/* <div>
				<button
					onClick={async () => {
						await signOut();
					}}
				>
					<Image src={LogOut} alt={'Logo'} width={50} height={50} className={'mx-auto w-full md:w-[400px]'} />
				</button>
			</div> */}
		</div>
	);
}
