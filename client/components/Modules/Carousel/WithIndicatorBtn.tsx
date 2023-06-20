import React, { ReactNode } from 'react';

// Reference: https://daisyui.com/components/carousel/#item4

type TContent = {
	title: string;
	desc: ReactNode;
};

interface IProps {
	contents: TContent[];
}

const WithIndicatorBtn = (props: IProps): React.ReactElement => {
	const { contents } = props;

	return (
		<>
			<div className='carousel w-full'>
				{contents.map((content: TContent, index: number) => (
					<div
						id={`item${index + 1}`}
						key={String(index)}
						className='carousel-item w-full min-w-[40vh]'>
						<div className='inner-wrapper w-full flex items-center flex-col'>
							<div className='title  mt-4'>
								<strong className='text-2xl'>{`<${content?.title}>`}</strong>
							</div>
							<div className='text-left my-4'>{content?.desc}</div>
						</div>
					</div>
				))}
			</div>
			<div className='flex justify-center w-full py-2 gap-2'>
				{contents.map((_, index: number) => (
					<a
						href={`#item${index + 1}`}
						className='btn btn-xs'
						key={String(index)}>
						{index + 1}
					</a>
				))}
			</div>
		</>
	);
};

export default WithIndicatorBtn;
