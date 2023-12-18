'use client';

import { GradingForm, TestCard } from '@/components/custom';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import Image from 'next/image';
import Logo from '/images/logo.svg';
import LogOut from '@images/logout.svg';

export default function Play() {
	const router = useRouter();
	const [password, setPassword] = useState<string | null>('');

	const { data, error, isLoading } = useSWR('/api/test?key=' + password, fetcher);

	// useEffect(() => {
	// 	const pass = localStorage.getItem('@password');
	// 	setPassword(pass);
	// 	if (!pass) {
	// 		router.push('/');
	// 	}
	// }, [router]);

	return (
		<div className={'w-full h-[100vh] text-[#F0F0F0] bg-black p-12 flex flex-col items-center justify-center gap-y-28'}>
			<Image src={Logo} alt={'Logo'} width={100} height={200} className={'mx-auto w-full md:w-[400px]'} />
			<TestCard data={data} error={error} isLoading={isLoading} />
			{data && data.status == 200 && password && <GradingForm password={password} data={data} />}
			<div>
				<button
					onClick={() => {
						localStorage.clear();
						router.push('/');
					}}
				>
					<Image src={LogOut} alt={'Logo'} width={50} height={50} className={'mx-auto w-full md:w-[400px]'} />
				</button>
			</div>
		</div>
	);
}
