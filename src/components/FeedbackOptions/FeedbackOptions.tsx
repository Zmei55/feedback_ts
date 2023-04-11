import { TFeedbackProps } from 'types';
import {
  OptionsContainer,
  Titel,
  Button,
  Options,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  options,
  title,
  onLeaveFeedback,
}: TFeedbackProps) => {
  return (
    <OptionsContainer>
      <Titel>{title}</Titel>
      <Options>
        {Object.keys(options).map(option => {
          return (
            <Button
              type="button"
              key={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          );
        })}
      </Options>
    </OptionsContainer>
  );
};
