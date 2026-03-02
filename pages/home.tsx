import MainComponent from '@/components/Home';
import { formatResult } from '@/components/Home/Handlers';
import WithIndicatorBtn from '@/components/Modules/Carousel/WithIndicatorBtn';
import CustomModal from '@/components/Modules/Modal';
import { mainStore } from '@/source/store';
import { CubeIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';

const HomePage = () => {
  const { apiData, modal, setModal } = mainStore();
  const router = useRouter();
  const checkIsLogin = () => {
    axios.get('api/isLogin').then((res) => {
      if (res.status === 200 && res.data.name) {
        // 로그인 성공
      } else {
        router.push('/');
        // 로그인 안됨
      }
    });
  };
  useEffect(() => {
    checkIsLogin();
  }, []);

  // === update state ===
  const updateClosed = () => {
    setModal(false);
  };

  // === format ===
  const formattedResult = useMemo(() => formatResult(apiData), [apiData]);

  // JSX
  const contents = useMemo(() => formattedResult, [formattedResult]);
  const formattedCarousel = WithIndicatorBtn({ contents });

  return (
    <>
      <MainComponent />
      <CustomModal
        modal={modal}
        setOpen={() => setModal(true)}
        setClose={() => updateClosed()}
        customIcon={<CubeIcon className="h-6 w-6 text-purple-400" aria-hidden="true" />}
        content={formattedCarousel}
        testId="homePage-result-modal"
      />
    </>
  );
};

export default HomePage;
