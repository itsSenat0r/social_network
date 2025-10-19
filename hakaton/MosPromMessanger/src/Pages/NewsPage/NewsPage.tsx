import { useEffect, useState, type FC } from 'react';
import { GroupDescription, NewsPageContainer } from './NewsPageContainer';
import mospromLogo from '../../assets/images/mospromLogo.png';
import AppTypography from '../../UI/AppTypography/AppTypography';
import { Avatar, Box } from '@mui/material';
import { BackButton } from '../../UI/BackButton/BackButton';
import { getData } from './NewsPageContainer';
import { CardNewsType, CardNewsList } from '../../Components/CardNewsList/CardNewsList';

type NewsPageProps = {
  props?: never;
};

type NewsShowType = {
  show: 'Main' | 'Group';
};

export const NewsPage: FC<NewsPageProps> = () => {
  const [showIs, setshowIs] = useState<NewsShowType>({ show: 'Main' });
  const [author, setAuthor] = useState<{ authorName: string; aurhorDesc: string }>({ authorName: '', aurhorDesc: '' });
  const [news, setNews] = useState<CardNewsType[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchNews = async (pageNum: number) => {
    try {
      setLoading(true);
      const data = await getData<CardNewsType[]>(`http://localhost:3005/posts?action=get&page=${pageNum}`);
      if (!data || data.length === 0) {
        setHasMore(false);
        return;
      }

      setNews(prev => [...prev, ...data]);
    } catch (error) {
      console.error('Ошибка загрузки новостей:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (loading || !hasMore) return;

      const bottomReached = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      if (bottomReached) {
        setPage(prev => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  useEffect(() => {
    if (page > 1) fetchNews(page);
  }, [page]);

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
            src={mospromLogo}
            alt="mospromLogo"
            loading="lazy"
          />
          <AppTypography fontWeight={900} variant="h2" fontSize={'1.25rem'} font="Roblox2Squared" color="secondary">
            достигай большего
          </AppTypography>
        </>
      )}
      {showIs.show === 'Group' && author.authorName !== '' && (
        <>
          <Box sx={{ paddingTop: '56px' }} />
          <Avatar sx={{ width: 115, height: 115 }} alt="profile-image" src="" />
          <AppTypography
            sx={{ paddingTop: '20px' }}
            font="Robloxian2"
            fontSize={'1.57rem'}
            fontWeight={900}
            color="success"
            variant="h2"
          >
            {author.authorName}
          </AppTypography>
          <AppTypography
            sx={{ paddingTop: '8px', paddingBottom: '20px' }}
            font="Robloxian2"
            fontSize={'0.97rem'}
            fontWeight={900}
            color="success"
            variant="h2"
          >
            дата регистрации
          </AppTypography>
          <GroupDescription>
            <AppTypography
              lineHeight={1}
              font="Robloxian2"
              fontSize={'1rem'}
              fontWeight={800}
              color="primary"
              variant="h2"
            >
              специализация: производство продуктов IPS для финансовых организаций
            </AppTypography>
            <AppTypography
              lineHeight={1}
              font="Robloxian2"
              fontSize={'1rem'}
              fontWeight={800}
              color="primary"
              variant="h2"
            >
              предлагают: кейсы, мероприятия
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
            Последние посты
          </AppTypography>
        </>
      )}

      <CardNewsList
        newsData={news}
        onClickGroup={(authorName, authorDesc) => {
          setAuthor({ aurhorDesc: authorDesc, authorName: authorName });
          setshowIs({ show: 'Group' });
        }}
      />

      {loading && (
        <AppTypography sx={{ textAlign: 'center', padding: '20px' }} color="primary">
          Загрузка...
        </AppTypography>
      )}
    </NewsPageContainer>
  );
};
