export type TFeedbackProps = {
  options: {
    good: number;
    neutral: number;
    bad: number;
  };
  title: string;
  onLeaveFeedback(option: string): void;
};

// interface IOptions {
//   good: number;
//   neutral: number;
//   bad: number;
// }

// export interface IFeedbackProps {
//   options: IOptions;
//   title: string;
//   onLeaveFeedback(option: string): void;
// }
