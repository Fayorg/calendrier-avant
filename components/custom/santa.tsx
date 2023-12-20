import Image from 'next/image';

import { santas } from '@/assets/images/santa/index';

interface SantaProps {
	height: number;
}
export function Santa({ ...props }: SantaProps) {
	if (props.height <= 0 || props.height > 24) {
		return <div className={'w-[100px] bg-blue-500'} />;
	}
	return (
		<div className="flex flex-col items-center">
			<Image src={santas[props.height - 1]} alt={'Santa'} width={100} height={200} />
		</div>
	);
}
