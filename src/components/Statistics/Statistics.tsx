import { TStatisticsProps } from 'types';
import { Notification } from 'components/Notification';
import { StatisticsContainer, Title, List, Item } from './Statistics.styled';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}: TStatisticsProps) => {
  return (
    <StatisticsContainer>
      <Title>{title}</Title>
      {total > 0 ? (
        <List>
          <Item>
            Goog: <span>{good}</span>
          </Item>
          <Item>
            Neutral: <span>{neutral}</span>
          </Item>
          <Item>
            Bad: <span>{bad}</span>
          </Item>
          <Item>
            Total: <span>{total}</span>
          </Item>
          <Item>
            Positive feedback: <span>{`${positivePercentage}%`}</span>
          </Item>
        </List>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </StatisticsContainer>
  );
};
