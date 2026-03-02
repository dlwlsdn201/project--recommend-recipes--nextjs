import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Reference: https://daisyui.com/components/carousel/#item4

type TContent = {
  title: string;
  desc: string;
};

interface IProps {
  contents: TContent[];
}

const WithIndicatorBtn = (props: IProps): React.ReactElement => {
  const { contents } = props;

  return (
    <>
      <div className="carousel w-full">
        {contents.map((content: TContent, index: number) => (
          <div id={`item${index + 1}`} key={String(index)} className="carousel-item w-full min-w-[40vh]">
            <div className="inner-wrapper w-full flex items-center flex-col px-4">
              {/* title에 ** 볼드 등 마크다운이 포함될 수 있으므로 ReactMarkdown으로 렌더링 */}
              <div className="text-left w-full prose max-w-none text-body1 text-base-content/70">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content?.desc}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2 mt-4">
        {contents.map((_, index: number) => (
          <a href={`#item${index + 1}`} className="btn btn-xs btn-outline btn-primary rounded-2xl" key={String(index)}>
            {index + 1}
          </a>
        ))}
      </div>
    </>
  );
};

export default WithIndicatorBtn;
