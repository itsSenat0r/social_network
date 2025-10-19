import { type FC } from 'react';
import { ProfileButton, ProfileDescriptionContainer } from '../../Pages/ProfilePage/ProfilePageContainer';
import AppTypography from '../../UI/AppTypography/AppTypography';

type ProfileDescriptionProps = {
  description: string;
  onClick: () => void;
};

export const ProfileDescription: FC<ProfileDescriptionProps> = ({ description, onClick }) => {
  return (
    <ProfileDescriptionContainer>
      <AppTypography
        sx={{ paddingBottom: '14px' }}
        color="white"
        font="Robloxian2"
        fontSize={'1.1rem'}
        fontWeight={900}
        variant="h3"
      >
        {description}
      </AppTypography>
      <ProfileButton onClick={() => onClick()}>
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
  );
};
