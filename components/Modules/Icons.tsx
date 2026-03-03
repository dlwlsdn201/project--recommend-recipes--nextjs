import { SiKakaotalk } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';

// === [Login page] ===
export const SNS_KAKAO = (iconSize?: number | string, style?: React.CSSProperties): React.ReactElement => (
  <SiKakaotalk size={iconSize ?? '1.75rem'} />
);

export const SNS_GOOGLE = (iconSize?: number | string, style?: React.CSSProperties): React.ReactElement => (
  <FcGoogle size={iconSize ?? '1.75rem'} style={{ ...style }} />
);
