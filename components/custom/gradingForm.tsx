'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function GradingForm({ password, data }: { password: string; data: any }) {
	const [grade, setGrade] = useState<number>(0);
	const [hasVoted, setHasVoted] = useState<boolean>(false);
	const router = useRouter();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const response = await fetch('/api/grade', {
			method: 'POST',
			body: JSON.stringify({ grade, key: password, testId: data.id }),
		});
		const json = await response.json();
		if (response.status == 200) {
			setHasVoted(true);
		} else {
			alert(json.message);
		}
	}

	if (data.vote.hasVoted || hasVoted) {
		return (
			<div>
				<p>Vous avez déjà voté, merci !</p>
				<p>{'Vous avez mis ' + (data.vote.hasVoted ? data.vote.grade : grade) + ' !'}</p>
			</div>
		);
	}

	return (
		<div>
			<p>Cliquer sur la note à la fin de la présentation :</p>
			<form onSubmit={handleSubmit}>
				<input type="radio" id="one" name="grade" checked={grade == 1} onChange={(e) => setGrade(1)}></input>
				<label htmlFor="one">1</label>
				<br></br>
				<input type="radio" id="15" name="grade" checked={grade == 1.5} onChange={(e) => setGrade(1.5)}></input>
				<label htmlFor="one">1.5</label>
				<br></br>
				<input type="radio" id="2" name="grade" checked={grade == 2} onChange={(e) => setGrade(2)}></input>
				<label htmlFor="one">2</label>
				<br></br>
				<input type="radio" id="25" name="grade" checked={grade == 2.5} onChange={(e) => setGrade(2.5)}></input>
				<label htmlFor="one">2.5</label>
				<br></br>
				<input type="radio" id="3" name="grade" checked={grade == 3} onChange={(e) => setGrade(3)}></input>
				<label htmlFor="one">3</label>
				<br></br>
				<input type="radio" id="35" name="grade" checked={grade == 3.5} onChange={(e) => setGrade(3.5)}></input>
				<label htmlFor="one">3.5</label>
				<br></br>
				<input type="radio" id="4" name="grade" checked={grade == 4} onChange={(e) => setGrade(4)}></input>
				<label htmlFor="one">4</label>
				<br></br>
				<input type="radio" id="45" name="grade" checked={grade == 4.5} onChange={(e) => setGrade(4.5)}></input>
				<label htmlFor="one">4.5</label>
				<br></br>
				<input type="radio" id="5" name="grade" checked={grade == 5} onChange={(e) => setGrade(5)}></input>
				<label htmlFor="one">5</label>
				<br></br>
				<input type="radio" id="55" name="grade" checked={grade == 5.5} onChange={(e) => setGrade(5.5)}></input>
				<label htmlFor="one">5.5</label>
				<br></br>
				<input type="radio" id="6" name="grade" checked={grade == 6} onChange={(e) => setGrade(6)}></input>
				<label htmlFor="one">6</label>
				<br></br>
				<input type="submit" value={'Envoyer'}></input>
			</form>
		</div>
	);
}
