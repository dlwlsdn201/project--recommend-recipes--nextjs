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
              <div className="title mt-4 mb-6">
                <strong className="text-3xl text-purple-400">{content?.title}</strong>
              </div>
              <div className="text-left w-full prose prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content?.desc}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2 mt-4">
        {contents.map((_, index: number) => (
          <a href={`#item${index + 1}`} className="btn btn-xs btn-outline btn-primary" key={String(index)}>
            {index + 1}
          </a>
        ))}
      </div>
    </>
  );
};

export default WithIndicatorBtn;
