import { useState, type FC } from 'react';
import {
  ProfilePageContainer,
  SettingsButton,
  SettingsContainer,
  SettingsContainerButton,
  SocialButton,
} from './ProfilePageContainer';
import { Box, Avatar } from '@mui/material';
import AppTypography from '../../UI/AppTypography/AppTypography';
import settingsImg from '../../assets/images/settingsImg.png';
import { ProfileDescription } from '../../Components/ProfileDescription/ProfileDescription';
import { PortfolioImages } from '../../Components/PortfolioImages/PortfolioImages';
import { MedalsListItemWrapper } from '../AchievementsPage/AchievementsPageContainer';
import { BackButton } from '../../UI/BackButton/BackButton';

type ProfilePageProps = {
  props?: never;
};

type ProfileShowType = {
  show: 'Main' | 'Portfolio' | 'Settings';
};

export const ProfilePage: FC<ProfilePageProps> = () => {
  const [showIs, setshowIs] = useState<ProfileShowType>({
    show: 'Main',
  });

  const show = (data: ProfileShowType) => {
    setshowIs(data);
  };

  return (
    <ProfilePageContainer>
      {showIs.show !== 'Main' && <BackButton onClick={() => show({ show: 'Main' })} />}
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
      {showIs.show === 'Main' && (
        <>
          <ProfileDescription
            onClick={() => show({ show: 'Portfolio' })}
            description={`
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
          />
          <SettingsButton onClick={() => show({ show: 'Settings' })}>
            <AppTypography
              lineHeight={1.4}
              font="Robloxian2"
              fontSize={'1.6rem'}
              color="secondary"
              fontWeight={900}
              variant="h3"
            >
              {'НАСТРОЙКИ'}
            </AppTypography>
            <img
              style={{
                height: '35px',
                width: '35px',
              }}
              src={`${settingsImg}`}
              alt={'go-to-settings'}
              loading="lazy"
            />
          </SettingsButton>
        </>
      )}
      {showIs.show === 'Portfolio' && (
        <>
          <PortfolioImages
            images={[
              'https://i.postimg.cc/kg8qKbFN/1.png',
              'https://i.postimg.cc/wMZYsqtv/2.png',
              'https://i.postimg.cc/m21sWHqt/3.png',
              'https://i.postimg.cc/wjKdqB8v/4.png',
            ]}
          />
          <SocialButton
            sx={{ width: '258px', marginBottom: '20px', marginTop: '45px' }}
            onClick={() => {
              window.open('https://www.behance.net/', '_blank', 'noopener,noreferrer');
            }}
          >
            <AppTypography
              lineHeight={1.4}
              font="Robloxian2"
              fontSize={'1.6rem'}
              color="secondary"
              fontWeight={900}
              variant="h3"
            >
              {'Behance →'}
            </AppTypography>
          </SocialButton>
          <SocialButton
            sx={{ width: '258px' }}
            onClick={() => {
              window.open('https://t.me', '_blank', 'noopener,noreferrer');
            }}
          >
            <AppTypography
              lineHeight={1.4}
              font="Robloxian2"
              fontSize={'1.6rem'}
              color="secondary"
              fontWeight={900}
              variant="h3"
            >
              {'Telegram →'}
            </AppTypography>
          </SocialButton>
        </>
      )}
      {showIs.show === 'Settings' && (
        <SettingsContainer>
          <SettingsContainerButton>
            <AppTypography font="Robloxian2" fontWeight={900} fontSize={'1.57rem'} color={'white'}>
              {'редактировать профиль'}
            </AppTypography>
          </SettingsContainerButton>
          <SettingsContainerButton>
            <AppTypography font="Robloxian2" fontWeight={900} fontSize={'1.57rem'} color={'white'}>
              {'мои кейсы'}
            </AppTypography>
          </SettingsContainerButton>
          <SettingsContainerButton>
            <AppTypography font="Robloxian2" fontWeight={900} fontSize={'1.57rem'} color={'white'}>
              {'мои контакты'}
            </AppTypography>
          </SettingsContainerButton>
          <SettingsContainerButton>
            <AppTypography font="Robloxian2" fontWeight={900} fontSize={'1.57rem'} color={'white'}>
              {'поддержка'}
            </AppTypography>
          </SettingsContainerButton>
          <SettingsContainerButton sx={{ marginTop: '40px' }}>
            <AppTypography font="Robloxian2" fontWeight={900} fontSize={'1.57rem'} color={'white'}>
              {'ВЫЙТИ →'}
            </AppTypography>
          </SettingsContainerButton>
        </SettingsContainer>
      )}
    </ProfilePageContainer>
  );
};
