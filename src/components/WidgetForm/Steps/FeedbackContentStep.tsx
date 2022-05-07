import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
  feedBackType: FeedbackType;
}

export function FeedbackContentStep({
  feedBackType,
}: FeedbackContentStepProps) {
  const feedBackTypeInfo = feedbackTypes[feedBackType];
  return (
    <>
      <header>
        <span className="text-lg leading-6 flex items-center gap-2">
          <img src={feedBackTypeInfo.image.source} alt={feedBackTypeInfo.image.alt} className="w-6 h-6" />
          {feedBackTypeInfo.title}
        </span>

        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
}
