import React, { type FC } from 'react';
import { CardNewsType } from '../CardNewsList/CardNewsList';
import AppTypography from '../../UI/AppTypography/AppTypography';
import { Avatar, Box, IconButton, ListItem, Stack } from '@mui/material';
import { CardNewsAuthorContainer, CardNewsContainer, CardNewsHeader } from './CardNewsContainer';
import mospromoLogo from '../../assets/images/mospromLogo.png';
import bakcgroundImg from '../../assets/images/background.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ReplyIcon from '@mui/icons-material/Reply';

type CardNewsProps = {
  children?: React.ReactNode;
  newsData: CardNewsType;
};

export const CardNews: FC<CardNewsProps> = ({ newsData, children }) => {
  return (
    <CardNewsContainer>
      <CardNewsHeader>
        <AppTypography color="primary" font="RobotoLocal" variant="body1" fontWeight={500} fontSize={'0.875rem'}>
          {newsData.headerText}
        </AppTypography>
      </CardNewsHeader>
      <CardNewsAuthorContainer>
        <Avatar sx={{ width: 50, height: 50 }} alt={newsData.authorName} src={''} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingInline: '8px',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <AppTypography variant="body1" color="textPrimary" font="RobotoLocal" fontWeight={500} fontSize={'1rem'}>
            {newsData.authorName}
          </AppTypography>
          <AppTypography
            lineHeight={1}
            variant="body2"
            color="textSecondary"
            font="RobotoLocal"
            fontWeight={400}
            fontSize={'0.725rem'}
          >
            {newsData.postData}
          </AppTypography>
        </Box>
      </CardNewsAuthorContainer>
      <Box sx={{ display: 'flex', width: '100%', backgroundColor: 'white', paddingBlock: '8px' }}>
        <img
          style={{
            paddingInline: 8,
            display: 'flex',
            maxHeight: '300px',
            objectFit: 'cover',
            width: '100%',
            maxWidth: '600px',
            borderRadius: '16px',
          }}
          src={newsData.postPicture}
          alt={"postpicture"}
          loading="lazy"
        />
      </Box>
      <Box sx={{ display: 'flex', width: '100%', backgroundColor: 'white', padding: '8px', paddingTop: '20px' }}>
        <AppTypography
          lineHeight={1.1}
          variant="body1"
          color="textPrimary"
          font="RobotoLocal"
          fontWeight={500}
          fontSize={'0.875rem'}
        >
          {newsData.smallDescription}
        </AppTypography>
      </Box>
      <Stack
        sx={{
          width: '100%',
          paddingInline: '8px',
          backgroundColor: 'white',
          paddingBottom: '16px',
          borderBottomLeftRadius: '16px',
          borderBottomRightRadius: '16px',
        }}
        direction="row"
        spacing={2}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <IconButton sx={{ paddingLeft: '0px' }} color="error" aria-label="likes">
            <FavoriteIcon />
          </IconButton>
          <AppTypography sx={{ marginLeft: '-4px', marginTop: '2px' }} fontWeight={500} fontSize={'0.725rem'}>
            {newsData.countLikes}
          </AppTypography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <IconButton color="error" aria-label="messages">
            <MessageIcon />
          </IconButton>
          <AppTypography sx={{ marginLeft: '-4px', marginTop: '2px' }} fontWeight={500} fontSize={'0.725rem'}>
            {newsData.countMessages}
          </AppTypography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <IconButton color="error" aria-label="posts">
            <ReplyIcon />
          </IconButton>
          <AppTypography sx={{ marginLeft: '-4px', marginTop: '2px' }} fontWeight={500} fontSize={'0.725rem'}>
            {newsData.countReposts}
          </AppTypography>
        </Box>
      </Stack>
    </CardNewsContainer>
  );
};
