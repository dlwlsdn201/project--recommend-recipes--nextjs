import { SiKakaotalk, SiGoogle } from 'react-icons/si';

// === [Login page] ===
export const SNS_KAKAO = (
	iconSize?: number | string,
	style?
): React.ReactElement => (
	<SiKakaotalk size={iconSize ?? '2rem'} style={{ margin: 0, ...style }} />
);

export const SNS_GOOGLE = (iconSize?: number | string): React.ReactElement => (
	<SiGoogle size={iconSize ?? '2rem'} />
);
