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
  const updateResult = (value: String): void => {
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

  // Chat GPT OpenAI API 요청 함수
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
      const response = await CREATE_RECOMMEND_RECIPES({
        userInput: formattedUserInput,
      });
      if (response.status >= 200 && response.status < 300) {
        updateResult(response?.data?.choices[0]?.text);
        // const formattedResult = formatResult(response?.data?.choices[0]?.text);
        updateSucceed();
      }
    } catch (error) {
      updateFailed();
      console.error(error);
    } finally {
      setIsFetched(true);
    }
  };

  const isDisabled = Boolean(!material1 && !material2 && !material3);
  return (
    <div className="root-container h-[100%] p-2">
      <div className="inner-container h-[100%] grid gap-6 tablet:grid-cols-5 grid-cols-1 grid-rows-1 ">
        <div
          className="area--left col-span-2 px-8 py-16 flex items-start border-r border-gray-300"
          data-testid="homePage-description"
        >
          <div className="inner-wrapper h-[100%]">
            <div className="title mobile:text-lg laptop:text-4xl mb-14">
              <strong>집에 있는 재료들로 무엇을 만들 수 있을까요?</strong>
            </div>
            <div className="desc mobile:text-sm laptop:text-2xl">
              <p className="my-8  mb-24">
                작성한 재료들과 선택한 음식 종류를 기반으로 chatGPT 가 추천 음식 레시피 몇 가지를 소개해 줄 것입니다.
              </p>
              <div>
                <ul className="list-disc text-xl leading-loose ml-6">
                  <li>원하는 결과를 얻기 위해 재료는 최소 1가지 이상 입력해주세요!</li>
                  <li>총 2개의 음식 레시피가 추천돼요!</li>
                  <li>음식이 아닌 재료를 입력하면 정확한 결과가 나오지 않아요!</li>
                  <li>결과 출력까지는 약 7초~20초가 소요돼요!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="area--right col-span-3 px-8 py-16">
          <Loading spinning={loading}>
            <div className="inner-wrapper grid grid-rows-12 grid-cols-1 gap-20">
              <div className="filters--wrapper grid row-start-1 tablet:grid-cols-1 laptop:grid-cols-3 gap-5">
                <div className="filter--block">
                  <div className="label">맵기 정도</div>
                  <div className="filter">
                    <Select
                      testId="homePage-filter-spicy"
                      value={spicyFilter}
                      options={spicyFilterItems}
                      isExistAll
                      onChange={(value) => {
                        setSpicyFilter(Number(value));
                      }}
                    />
                  </div>
                </div>
                <div className="filter--block">
                  <div className="label">종류</div>
                  <div className="filter">
                    <Select
                      testId="homePage-filter-menuType"
                      value={menuTypeFilter}
                      options={menuTypeFilterItems}
                      isExistAll
                      onChange={(value) => setMenuTypeFilter(Number(value))}
                    />
                  </div>
                </div>
                <div className="filter--block">
                  <div className="label">목적</div>
                  <div className="filter">
                    <Select
                      testId="homePage-filter-concept"
                      value={conceptFilter}
                      options={conceptFilterItems}
                      isExistAll
                      onChange={(value) => setConceptFilter(Number(value))}
                    />
                  </div>
                </div>
              </div>
              <div className="filters--wrapper grid row-start-2 tablet:grid-cols-1 laptop:grid-cols-3 gap-5">
                <div className="filter--block">
                  <div className="label">재료1</div>
                  <div className="filter">
                    <TextInput
                      testId="homePage-input-material1"
                      placeholder="입력 (필수)"
                      onChange={(value) => setMaterials('material1', value)}
                      value={material1}
                    />
                  </div>
                </div>
                <div className="filter--block">
                  <div className="label">재료2</div>
                  <div className="filter">
                    <TextInput
                      testId="homePage-input-material2"
                      placeholder="입력"
                      onChange={(value) => setMaterials('material2', value)}
                      value={material2}
                    />
                  </div>
                </div>
                <div className="filter--block">
                  <div className="label">재료3</div>
                  <div className="filter">
                    <TextInput
                      testId="homePage-input-material3"
                      placeholder="입력"
                      onChange={(value) => setMaterials('material3', value)}
                      value={material3}
                    />
                  </div>
                </div>
                {/* <div className='filter--block'>
										<div className='label'>재료4</div>
										<div className='filter'>
											<TextInput
												testId='homePage-input-material4'
												placeholder='입력'
												onChange={(value) => setMaterials('material4', value)}
												value={material4}
											/>
										</div>
									</div> */}
              </div>
              <div className="filters--wrapper grid row-start-4 grid-cols-1">
                <div className="submit--block auto-cols-max">
                  <Primary
                    label="추천 받기"
                    onSubmit={onFinishForm}
                    disabled={isDisabled}
                    testId="homePage-submit-button"
                    style={{ height: '6rem', fontSize: '2rem' }}
                  />
                </div>
              </div>
            </div>
          </Loading>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
