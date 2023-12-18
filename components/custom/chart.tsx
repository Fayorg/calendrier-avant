'use client';

import { Santa } from '@components/custom/santa';

interface ChartProps {
	data: {
		name: string;
		total: number;
	}[];
}

export function Chart({ ...props }: ChartProps) {
	return (
		<div className={'text-[#F0F0F0] flex-1 flex items-end'}>
			<div className={'w-full'}>
				<div className={'flex flex-row justify-between w-full items-end'}>
					{props.data.map((item, index) => (
						<Santa height={item.total} key={index} />
					))}
				</div>
				<div className={'flex flex-row justify-between w-full items-end mt-2'}>
					{props.data.map((item, index) => (
						<div className={'w-[100px] h-fit flex flex-col items-center'} key={index}>
							<div className={'h-[14px] w-[3pt] bg-white'} />
							<span className={''}>{item.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
