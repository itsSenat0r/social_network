import { type FC } from 'react';
import { ProfileButton, ProfileDescriptionContainer, ProfilePageContainer } from './ProfilePageContainer';
import { Box, Avatar } from '@mui/material';
import AppTypography from '../../UI/AppTypography/AppTypography';
import { AchievementsButton } from '../AchievementsPage/AchievementsPageContainer';

type ProfilePageProps = {
  props?: never;
};

export const ProfilePage: FC<ProfilePageProps> = () => {
  return (
    <ProfilePageContainer>
      <Box sx={{ paddingTop: '56px' }} />
      <Avatar sx={{ width: 115, height: 115 }} alt={'profile-image'} src={''} />
      <AppTypography
        sx={{ paddingTop: '20px', paddingBottom: '27px' }}
        font="Roblox2Squared"
        fontSize={'1.57rem'}
        fontWeight={900}
        color="success"
        variant="h2"
      >
        {'Ника CBRGRL'}
      </AppTypography>
      <ProfileDescriptionContainer>
        <AppTypography
          sx={{ paddingBottom: '14px' }}
          color="white"
          font="Robloxian2"
          fontSize={'1.1rem'}
          fontWeight={900}
          variant="h3"
        >
          {`
          Ника CBRGRL\n\n
          на сайте с: 18.10.25\n\n
          О себе: 2 года опыта работы
          в графическом дизайне,
          дизайне упаковки,
          разработке интерфейсов.
          Выиграла грант от ”АС Фонд-М” в 2024 году.\n\n
          Компетенции: работа
          в Figma, пакете Adobe, Krita,
          Blender
          `}
        </AppTypography>
        <ProfileButton>
          <AppTypography
            lineHeight={1}
            font="Robloxian2"
            fontSize={'1.6rem'}
            color="secondary"
            fontWeight={900}
            variant="h3"
          >
            {'портфолио →'}
          </AppTypography>
        </ProfileButton>
      </ProfileDescriptionContainer>
    </ProfilePageContainer>
  );
};
