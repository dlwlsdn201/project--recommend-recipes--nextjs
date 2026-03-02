import React from 'react';
import Select from '../Modules/Select';
import { conceptFilterItems, menuTypeFilterItems, spicyFilterItems } from './Filters';
import TextInput from '../Modules/TextInput';
import { commonStore, mainStore } from '@/source/store';
import Primary from '../Modules/Buttons/Primary';
import { CREATE_RECOMMEND_RECIPES } from '../../api';
import { formatInputDataToRequest } from './Handlers';
import Loading from '../Modules/Loading';
import { handleApiFailed, handleApiSucceed } from '../Contact/Modules/FetchHandler';
import { GoogleGenAI } from '@google/genai';

const genAI = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY || '',
});

const MainComponent = () => {
  const { setIsFetched, setIsError, loading, setLoading } = commonStore();
  const {
    material1,
    material2,
    material3,
    // material4,
    spicyFilter,
    menuTypeFilter,
    conceptFilter,
    setSpicyFilter,
    setMenuTypeFilter,
    setConceptFilter,
    setMaterials,
    setApiData,
    setModal,
  } = mainStore();

  // === update state
  const updateResult = (value: string): void => {
    setApiData(value);
  };

  const updateSucceed = () => {
    handleApiSucceed({
      setIsFetched,
      setLoading,
    });
    setModal(true); // Modal 활성화
  };
  const updateFailed = () => {
    handleApiFailed({
      setIsFetched,
      setLoading,
      setIsError,
    });
  };

  // Google Gemini API 요청 함수
  const onFinishForm = async () => {
    try {
      setLoading(true);
      // 사용자 입력 값 전달 및 응답 받기
      const inputValues = {
        spicyFilter,
        menuTypeFilter,
        conceptFilter,
        materials: [material1, material2, material3],
      };
      const formattedUserInput = formatInputDataToRequest(inputValues);

      // Gemini API 직접 호출
      const result = await genAI.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: formattedUserInput,
      });

      if (result.text) {
        updateResult(result.text);
        updateSucceed();
      } else {
        throw new Error('No content generated');
      }
    } catch (error) {
      updateFailed();
      alert('레시피 정보를 가져오는 중 오류가 발생했습니다. 다시 시도해주세요.');
      console.error(error);
    } finally {
      setIsFetched(true);
    }
  };

  const isDisabled = Boolean(!material1 && !material2 && !material3);
  return (
    <div
      className="root-container max-w-2xl w-full mx-auto"
      data-testid="homePage-description"
    >
      <div className="flex flex-col gap-8">
        {/* 설명 카드 */}
        <div className="card bg-base-100 shadow-xl rounded-2xl">
          <div className="card-body">
            <h1 className="text-h1 text-base-content">집에 있는 재료들로 무엇을 만들 수 있을까요?</h1>
            <p className="text-body1 text-base-content/70 my-4">
              작성한 재료들과 선택한 음식 종류를 기반으로 Google Gemini가 추천 음식 레시피 몇 가지를 소개해 줄 것입니다.
            </p>
            <ul className="list-disc text-body1 text-base-content/70 leading-loose ml-6">
              <li>원하는 결과를 얻기 위해 재료는 최소 1가지 이상 입력해주세요!</li>
              <li>총 2개의 음식 레시피가 추천돼요!</li>
              <li>음식이 아닌 재료를 입력하면 정확한 결과가 나오지 않아요!</li>
              <li>결과 출력까지는 약 5초~15초가 소요돼요!</li>
            </ul>
          </div>
        </div>

        {/* 입력 폼 카드 */}
        <div className="card bg-base-100 shadow-xl rounded-2xl">
          <div className="card-body gap-6">
            <h2 className="text-h2 text-base-content">조건 선택</h2>
            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-body2">맵기 정도</span>
                </label>
                <Select
                  testId="homePage-filter-spicy"
                  value={spicyFilter}
                  options={spicyFilterItems}
                  isExistAll
                  onChange={(value) => setSpicyFilter(Number(value))}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-body2">종류</span>
                </label>
                <Select
                  testId="homePage-filter-menuType"
                  value={menuTypeFilter}
                  options={menuTypeFilterItems}
                  isExistAll
                  onChange={(value) => setMenuTypeFilter(Number(value))}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-body2">목적</span>
                </label>
                <Select
                  testId="homePage-filter-concept"
                  value={conceptFilter}
                  options={conceptFilterItems}
                  isExistAll
                  onChange={(value) => setConceptFilter(Number(value))}
                />
              </div>
            </div>

            <h2 className="text-h2 text-base-content mt-4">재료 입력</h2>
            <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-body2">재료1</span>
                </label>
                <TextInput
                  testId="homePage-input-material1"
                  placeholder="입력 (필수)"
                  onChange={(value) => setMaterials('material1', value)}
                  value={material1}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-body2">재료2</span>
                </label>
                <TextInput
                  testId="homePage-input-material2"
                  placeholder="입력"
                  onChange={(value) => setMaterials('material2', value)}
                  value={material2}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-body2">재료3</span>
                </label>
                <TextInput
                  testId="homePage-input-material3"
                  placeholder="입력"
                  onChange={(value) => setMaterials('material3', value)}
                  value={material3}
                />
              </div>
            </div>

            <div className="mt-6">
              <Loading spinning={loading}>
                <Primary
                  label="추천 받기"
                  onSubmit={onFinishForm}
                  disabled={isDisabled}
                  testId="homePage-submit-button"
                  style={{ height: '3.5rem', fontSize: '1.125rem' }}
                />
              </Loading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
