'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@components/ui/button";
import { Input } from "@/components/ui/input"

export default function Home() {
	const [password, setPassword] = useState('');
	const router = useRouter();

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		localStorage.setItem('@password', password);
		router.push('/play');
	}

	return (
		<div>
			<h1>Calendrier-avent</h1>
			<p>Please enter the password :</p>
			<form onSubmit={handleSubmit}>
				<input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
				<input type="submit" value="Submit"></input>
			</form>
			<Button>Button</Button>
			<Input type="text" />
		</div>
	);
}
