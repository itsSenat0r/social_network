import { useState, type FC } from 'react';
import { GroupDescription, NewsPageContainer } from './NewsPageContainer';
import mospromLogo from '../../assets/images/mospromLogo.png';
import AppTypography from '../../UI/AppTypography/AppTypography';
import { CardNewsList, CardNewsType } from '../../Components/CardNewsList/CardNewsList';
import { Avatar, Box } from '@mui/material';
import { BackButton } from '../../UI/BackButton/BackButton';

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
    id: '1',
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

type NewsShowType = {
  show: 'Main' | 'Group';
};

export const NewsPage: FC<NewsPageProps> = () => {
  const [showIs, setshowIs] = useState<NewsShowType>({
    show: 'Main',
  });

  const [author, setAuthor] = useState('');

  const show = (data: NewsShowType) => {
    setshowIs(data);
  };
  return (
    <NewsPageContainer>
      {showIs.show !== 'Main' && <BackButton onClick={() => show({ show: 'Main' })} />}
      {showIs.show === 'Main' && (
        <>
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
        </>
      )}
      {showIs.show === 'Group' && author !== '' && (
        <>
          <Box sx={{ paddingTop: '56px' }} />
          <Avatar sx={{ width: 115, height: 115 }} alt={'profile-image'} src={''} />
          <AppTypography
            sx={{ paddingTop: '20px' }}
            font="Robloxian2"
            fontSize={'1.57rem'}
            fontWeight={900}
            color="success"
            variant="h2"
          >
            {author}
          </AppTypography>
          <AppTypography
            sx={{ paddingTop: '8px', paddingBottom: '20px' }}
            font="Robloxian2"
            fontSize={'0.97rem'}
            fontWeight={900}
            color="success"
            variant="h2"
          >
            {'дата регистрации'}
          </AppTypography>
          <GroupDescription>
            <AppTypography
              lineHeight={1}
              sx={{}}
              font="Robloxian2"
              fontSize={'1rem'}
              fontWeight={800}
              color="primary"
              variant="h2"
            >
              {'специализация: производство продуктов IPS для финансовых организаций'}
            </AppTypography>
            <AppTypography
              lineHeight={1}
              sx={{}}
              font="Robloxian2"
              fontSize={'1rem'}
              fontWeight={800}
              color="primary"
              variant="h2"
            >
              {'предлагают: кейсы мероприятия'}
            </AppTypography>
          </GroupDescription>
          <AppTypography
            sx={{ paddingTop: '20px', marginBottom: '-20px' }}
            font="Robloxian2"
            fontSize={'1.87rem'}
            fontWeight={900}
            color="primary"
            variant="h2"
          >
            {'Последние посты'}
          </AppTypography>
        </>
      )}
      <CardNewsList
        newsData={mockNews}
        onClickGroup={author => {
          setAuthor(author);
          show({ show: 'Group' });
        }}
      />
      <Box sx={{ display: 'flex', width: '100%', height: '30vh' }} />
    </NewsPageContainer>
  );
};
