import MainComponent from '@/components/Home';
import { formatResult } from '@/components/Home/Handlers';
import WithIndicatorBtn from '@/components/Modules/Carousel/WithIndicatorBtn';
import CustomModal from '@/components/Modules/Modal';
import { MOCK_RESPONSE_DATA } from '@/mocks/data/home';
import { mainStore } from '@/source/store';
import { CubeIcon } from '@heroicons/react/24/outline';
import React, { useMemo } from 'react';

const HomePage = () => {
	const { apiData, modal, setModal, isRequested, setIsRequested } = mainStore();

	// === update state ===
	const updateClosed = () => {
		setModal(false);
		setIsRequested(false);
	};

	// === format ===
	const formattedResult = useMemo(() => formatResult(apiData), []);

	// JSX
	const contents = useMemo(() => formattedResult, [isRequested]);
	const formattedCarousel = WithIndicatorBtn({ contents });

	return (
		<>
			<MainComponent />
			<CustomModal
				modal={modal}
				setOpen={() => setModal(true)}
				setClose={() => updateClosed()}
				customIcon={
					<CubeIcon className='h-6 w-6 text-purple-400' aria-hidden='true' />
				}
				content={formattedCarousel}
				testId='homePage-result-modal'
			/>
		</>
	);
};

export default HomePage;
