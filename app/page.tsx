'use client';

import { useState } from 'react';

export default function Home() {
	const [password, setPassword] = useState('');

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		console.log(password);
		setPassword('');
	}

	return (
		<div>
			<h1>Calendrier-avant</h1>
			<p>Please enter the password :</p>
			<form onSubmit={handleSubmit}>
				<input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
				<input type="submit" value="Submit"></input>
			</form>
		</div>
	);
}
