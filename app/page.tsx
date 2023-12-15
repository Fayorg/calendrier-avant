'use client';

import { Poppins } from 'next/font/google';
import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import logo from '../images/logo.svg';
import Image from 'next/image';
import { Input } from '@components/ui/input';
import { white } from 'next/dist/lib/picocolors';
import { signIn } from 'next-auth/react';

export default function Home() {
	const [password, setPassword] = useState('');
	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem('@password')) {
			router.push('/play');
		}
	}, [router]);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		// localStorage.setItem('@password', password);
		// router.push('/play');

		console.log('Trying to sign in');
		const result = await signIn('credentials', {
			key: password,
			callbackUrl: '/play',
		});
	}

	return (
		<div className={'w-full h-screen text-[#F0F0F0] bg-black p-12 flex flex-col items-center justify-center gap-y-28'}>
			<Image src={logo} alt={'Logo'} width={100} height={200} className={'mx-auto w-full md:w-[400px]'} />
			<form onSubmit={handleSubmit} className={'flex flex-row gap-4 w-full md:w-[400px]'}>
				<Input type="password" placeholder="Mot de passe" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
				<input type="submit" value="Submit" id="submit" className={'hidden'} />
				<label htmlFor="submit" className={'w-[54px] h-[54px] bg-secondary rounded-[20px] contents-none grid place-content-center'}>
					<Check width={24} height={24} color={'white'} />
				</label>
			</form>
		</div>
	);
}
