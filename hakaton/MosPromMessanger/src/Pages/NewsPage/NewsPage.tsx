import { type FC } from 'react';
import { NewsPageContainer } from './NewsPageContainer';
import mospromLogo from '../../assets/images/mospromLogo.png';
import AppTypography from '../../UI/AppTypography/AppTypography';
import { CardNewsList, CardNewsType } from '../../Components/CardNewsList/CardNewsList';
import { Box } from '@mui/material';
import { getData, sendData } from './NewsPageContainer'

type NewsPageProps = {
  props?: never;
};

const News: CardNewsType[] = [];



(async () => {
  const data = await getData<CardNewsType[]>('http://localhost:3005/posts?action=get') ?? [];
  News.push(...data);
})();
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
      <CardNewsList newsData={News} />
      <Box sx={{ display: 'flex', width: '100%', height: '30vh' }} />
    </NewsPageContainer>
  );
};
