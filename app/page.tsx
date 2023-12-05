'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
	const [password, setPassword] = useState('');
	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem('@password')) {
			router.push('/play');
		}
	}, [router]);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		localStorage.setItem('@password', password);
		router.push('/play');
	}

	return (
		<div className={''}>
			<h1 className={'border-l-blue-600'}>Calendrier-avent</h1>
			<p>Merci d'entrer votre clé :</p>
			<form onSubmit={handleSubmit}>
				<input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
				<input type="submit" value="Submit"></input>
			</form>
		</div>
	);
}
