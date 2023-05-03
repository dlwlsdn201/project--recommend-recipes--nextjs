// import Image from 'next/image';
import { Inter } from 'next/font/google';
import Login from '@/components/Login';

// const inter = Inter({ subsets: ['latin'] });

export default function LoginPage() {
	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
			<Login />
		</>
	);
}
