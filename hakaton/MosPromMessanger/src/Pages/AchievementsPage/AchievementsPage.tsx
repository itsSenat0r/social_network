import { useState, type FC } from 'react';
import { Avatar, Box } from '@mui/material';
import AppTypography from '../../UI/AppTypography/AppTypography';
import {
  AchievementsButton,
  AchievementsButtonsContainer,
  AchievementsPageContainer,
  MedalsContainer,
  MedalsListContainer,
  MedalsListItemWrapper,
  MedalsMainContainer,
} from './AchievementsPageContainer';
import { AchievementsStats } from '../../Components/AchievementsStats/AchievementsStats';
import { BackButton } from '../../UI/BackButton/BackButton';

type AchievementsPageProps = {
  medals: { text: string; isOpen: boolean }[];
  quests: { text: string }[];
};

type AchievementsShowType = {
  show: 'Medals' | 'Quests' | 'Main';
};

export const AchievementsPage: FC<AchievementsPageProps> = ({ medals, quests }) => {
  const [showIs, setshowIs] = useState<AchievementsShowType>({
    show: 'Main',
  });

  const show = (data: AchievementsShowType) => {
    setshowIs(data);
  };

  return (
    <AchievementsPageContainer>
      {showIs.show !== 'Main' && <BackButton onClick={() => show({ show: 'Main' })} />}
      <Box sx={{ paddingTop: showIs.show === 'Main' ? '56px' : '32px' }}></Box>
      <Avatar sx={{ width: 115, height: 115 }} alt={'profile-image'} src={''} />
      <AppTypography
        sx={{ paddingTop: showIs.show === 'Main' ? '20px' : '17px' }}
        font="Roblox2Squared"
        fontSize={'1.57rem'}
        fontWeight={900}
        color="success"
        variant="h2"
      >
        {'Ника CBRGRL'}
      </AppTypography>
      <AchievementsStats paddingTop={showIs.show === 'Main' ? '56px' : '33px'} xp={'800'} level={'3'} />
      {showIs.show === 'Main' && (
        <AchievementsButtonsContainer>
          <AchievementsButton onClick={() => show({ show: 'Quests' })}>
            <AppTypography font="Roblox2Squared" fontSize={'2.27rem'} color="secondary" fontWeight={900} variant="h3">
              {'КВЕСТЫ'}
            </AppTypography>
          </AchievementsButton>
          <AchievementsButton onClick={() => show({ show: 'Medals' })}>
            <AppTypography font="Roblox2Squared" fontSize={'2.15rem'} color="secondary" fontWeight={900} variant="h3">
              {'МЕДАЛИ'}
            </AppTypography>
          </AchievementsButton>
        </AchievementsButtonsContainer>
      )}
      {showIs.show === 'Medals' && (
        <MedalsMainContainer>
          <MedalsContainer>
            <AppTypography font="Roblox2Squared" fontSize={'2rem'} color="secondary" fontWeight={900} variant="h3">
              {'МЕДАЛИ'}
            </AppTypography>
            <MedalsListContainer>
              {medals.map((medal, index) => (
                <MedalsListItemWrapper
                  key="medal-item-${index}"
                  sx={{ borderColor: medal.isOpen ? 'white' : '#a7a7a7' }}
                >
                  <AppTypography
                    font="Robloxian2"
                    fontWeight={900}
                    fontSize={'1.1rem'}
                    color={medal.isOpen ? 'white' : '#a7a7a7'}
                  >
                    {medal.text}
                  </AppTypography>
                </MedalsListItemWrapper>
              ))}
            </MedalsListContainer>
          </MedalsContainer>
        </MedalsMainContainer>
      )}
      {showIs.show === 'Quests' && (
        <MedalsMainContainer>
          <MedalsContainer>
            <AppTypography font="Roblox2Squared" fontSize={'2rem'} color="secondary" fontWeight={900} variant="h3">
              {'КВЕСТЫ'}
            </AppTypography>
            <MedalsListContainer>
              {quests.map(({ text }, index) => (
                <MedalsListItemWrapper key="medal-item-${index}" sx={{ borderColor: 'white' }}>
                  <AppTypography font="Robloxian2" fontWeight={900} fontSize={'1.1rem'} color={'white'}>
                    {text}
                  </AppTypography>
                </MedalsListItemWrapper>
              ))}
            </MedalsListContainer>
          </MedalsContainer>
        </MedalsMainContainer>
      )}
      <Box sx={{ display: 'flex', width: '100%', height: '20vh' }} />
    </AchievementsPageContainer>
  );
};
