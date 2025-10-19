import { type FC } from 'react';
import { CardNewsContainer, CardNewsListContainer } from './CardNewsContainer';
import { CardNews } from '../CardNews/CardNews';

type CardNewsListProps = {
  newsData: CardNewsType[];
};

export const CardNewsList: FC<CardNewsListProps> = ({ newsData }) => (
  <CardNewsContainer>
    <CardNewsListContainer>
      {newsData.map((data, index) => (
        <CardNews key={index} newsData={data} />
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
  countLikes: number;
  countMessages: number;
  countReposts: number;
};
