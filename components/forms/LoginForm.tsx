'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Check } from 'lucide-react';

export function LoginForm() {
	const [password, setPassword] = useState('');

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		await signIn('credentials', {
			key: password,
			callbackUrl: '/play',
		});
	}

	return (
		<form onSubmit={handleSubmit} className={'flex flex-row gap-4 w-full md:w-[400px]'}>
			<Input type="password" placeholder="Mot de passe" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
			<input type="submit" value="Submit" id="submit" className={'hidden'} />
			<label htmlFor="submit" className={'w-[54px] h-[54px] bg-secondary rounded-[20px] contents-none grid place-content-center'}>
				<Check width={24} height={24} color={'white'} />
			</label>
		</form>
	);
}
