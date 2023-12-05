'use client';

import { GradingForm, TestCard } from '@/components/custom';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export default function Play() {
	const router = useRouter();
	const [password, setPassword] = useState<string | null>('');

	const { data, error, isLoading } = useSWR('/api/test?key=' + password, fetcher);

	useEffect(() => {
		const pass = localStorage.getItem('@password');
		setPassword(pass);
		if (!pass) {
			router.push('/');
		}
	}, [router]);

	return (
		<div>
			<h1>Calendrier-avant</h1>
			<TestCard data={data} error={error} isLoading={isLoading} />
			{data && console.log(data)}
			{data && data.status == 200 && password && <GradingForm password={password} data={data} />}
			<div>
				<button
					onClick={(e) => {
						localStorage.clear();
						router.push('/');
					}}
				>
					Se déconnecter
				</button>
			</div>
		</div>
	);
}
