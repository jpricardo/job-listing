import Image from 'next/image';

const baseUrl = 'https://ui-avatars.com/api/?name=$COMPANY&size=$SIZE&background=random';

export function CompanyAvatarSkeleton({ size = 64 }: { size?: number }) {
	return (
		<div
			className='animate-pulse backdrop-brightness-80 dark:backdrop-brightness-120'
			style={{ height: `${size}px`, width: `${size}px` }}
		/>
	);
}

type Props = Readonly<{ companyName: string; size?: number }>;
export default function CompanyAvatar({ companyName, size = 64 }: Props) {
	const imageUrl = baseUrl.replace('$COMPANY', companyName).replace('$SIZE', (size * 4).toString());

	return <Image className='bordered rounded-sm' width={size} height={size} src={imageUrl} alt='company-avatar' />;
}
