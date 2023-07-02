// import Image from 'next/image';
import { Inter } from 'next/font/google';
import Login from '@/components/Login';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { CREATE_LOGIN } from '@/api';
import { commonStore } from '@/source/store';

// const inter = Inter({ subsets: ['latin'] });

export default function LoginPage() {
	const router = useRouter();
	const { setIsLogin } = commonStore();
	const handleLogin = async () => {
		try {
			const response = await CREATE_LOGIN();
			if (response.status === 200) {
				setIsLogin(true);
				router.push('/home');
			}
		} catch (error) {
			console.error(error);
		}
	};

	return <Login handleLogin={handleLogin} />;
}
