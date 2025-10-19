import { type FC } from 'react';
import { NewsPageContainer } from './NewsPageContainer';
import mospromLogo from '../../assets/images/mospromLogo.png';
import AppTypography from '../../UI/AppTypography/AppTypography';
import { CardNewsList, CardNewsType } from '../../Components/CardNewsList/CardNewsList';
import { Box } from '@mui/material';

type NewsPageProps = {
  props?: never;
};

const mockNews: CardNewsType[] = [
  {
    id: '0',
    headerText: 'Кейс',
    authorImg: '1',
    authorName: 'ООО "Цифра Плюс"',
    postData: '25.04.2024',
    smallDescription:
      'ООО "Цифра Плюс" организует кейс по оптимизации IT-инфраструктуры для крупного банка. В рамках проекта будут внедрены решения по безопасности и мониторингу систем.',
    countLikes: 812,
    countMessages: 745,
    countReposts: 312,
  },
  {
    id: '0',
    headerText: 'Кейс',
    authorImg: '1',
    authorName: 'ООО "Цифра Плюс"',
    postData: '25.04.2024',
    smallDescription:
      'ООО "Цифра Плюс" организует кейс по оптимизации IT-инфраструктуры для крупного банка. В рамках проекта будут внедрены решения по безопасности и мониторингу систем.',
    countLikes: 812,
    countMessages: 745,
    countReposts: 312,
  },
];

export const NewsPage: FC<NewsPageProps> = () => {
  return (
    <NewsPageContainer>
      <img
        style={{
          paddingInline: 43,
          paddingTop: 27,
          display: 'flex',
          height: '79px',
          objectFit: 'contain',
          maxWidth: '100%',
        }}
        src={`${mospromLogo}`}
        alt={mospromLogo}
        loading="lazy"
      />
      <AppTypography fontWeight={900} variant="h2" fontSize={'1.25rem'} font="Roblox2Squared" color="secondary">
        {'достигай большего'}
      </AppTypography>
      <CardNewsList newsData={mockNews} />
      <Box sx={{ display: 'flex', width: '100%', height: '30vh' }} />
    </NewsPageContainer>
  );
};
