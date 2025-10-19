import { type FC } from 'react';
import { CardNewsContainer, CardNewsListContainer } from './CardNewsContainer';
import { CardNews } from '../CardNews/CardNews';

type CardNewsListProps = {
  newsData: CardNewsType[];
  onClickGroup: (authorName: string) => void;
};

export const CardNewsList: FC<CardNewsListProps> = ({ newsData, onClickGroup }) => (
  <CardNewsContainer>
    <CardNewsListContainer>
      {newsData.map((data, index) => (
        <CardNews key={index} newsData={data} onClickAuthor={onClickGroup} />
      ))}
    </CardNewsListContainer>
  </CardNewsContainer>
);

export type CardNewsType = {
  id: string;
  headerText: string;
  authorImg: string;
  authorName: string;
  postData: string;
  smallDescription: string;
  postPicture: string;
  countLikes: number;
  countMessages: number;
  countReposts: number;
};
