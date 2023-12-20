import logo from '@/assets/images/logo.svg';
import Image from 'next/image';
import { LoginForm } from '@/components/forms/LoginForm';
import { getAuthServerSession } from '@/lib/authenticate';
import { redirect } from 'next/navigation';

export default async function Home() {
	const session = await getAuthServerSession();

	if (session != null) {
		redirect('/play');
	}

	return (
		<div className={'w-full h-screen text-[#F0F0F0] bg-black p-12 flex flex-col items-center justify-center gap-y-28'}>
			<Image src={logo} alt={'Logo'} width={100} height={200} className={'mx-auto w-full md:w-[400px]'} />
			<LoginForm />
		</div>
	);
}
