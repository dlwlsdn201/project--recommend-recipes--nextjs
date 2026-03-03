/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'], // 폰트 설정
      },
      // 타이포그래피 시스템 정의
      fontSize: {
        h1: ['30px', { lineHeight: '1.3', fontWeight: '700' }], // text-h1
        h2: ['20px', { lineHeight: '1.4', fontWeight: '700' }], // text-h2
        body1: ['16px', { lineHeight: '1.5', fontWeight: '400' }], // text-body1
        body2: ['14px', { lineHeight: '1.5', fontWeight: '500' }], // text-body2
        caption: ['12px', { lineHeight: '1.4', fontWeight: '400' }], // text-caption
      },
    },
    screens: {
      // min-width
      mobile: '320px',
      tablet: '768px',
      laptop: '1200px',
      desktop: '1536px',
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        recipeTheme: {
          primary: '#F97316', // Appetizing Orange - 주요 액션 버튼
          secondary: '#22C55E', // Fresh Green - 채식/건강 태그
          accent: '#FBBF24', // Warm Yellow - 별점, 강조 배지
          neutral: '#3D4451',
          'base-100': '#FFFFFF', // Surface - 카드, 입력창 배경
          'base-200': '#F9FAFB', // Background - 전체 페이지 배경
          'base-content': '#111827', // 텍스트 기본 색상
          'base-primary': '#FFFFFF', // 배경 텍스트 기본 색상
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
      'light',
    ],
    base: true,
    styled: true,
    utils: true,
  },
};
