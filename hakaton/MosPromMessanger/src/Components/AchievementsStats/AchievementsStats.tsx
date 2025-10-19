import { type FC } from 'react';
import AppTypography from '../../UI/AppTypography/AppTypography';
import { AchievementsStatsContainer, StatsRowContainer } from './AchievementsStatsContainer';
import statsLine from '../../assets/images/statsline.png';

type AchievementsStatsProps = {
  xp: string;
  level: string;
  paddingTop: React.CSSProperties['paddingTop'];
};

export const AchievementsStats: FC<AchievementsStatsProps> = ({ xp, level, paddingTop }) => {
  return (
    <AchievementsStatsContainer paddingTop={paddingTop}>
      <StatsRowContainer>
        <AppTypography
          sx={{ textAlign: 'right' }}
          fontSize={'1.87rem'}
          variant="body1"
          font="Roblox2Squared"
          fontWeight={900}
          color="secondary"
        >
          {'ХП'}
        </AppTypography>
        <img
          className="center"
          style={{
            height: '10px',
            objectFit: 'cover',
            width: '156px',
          }}
          src={`${statsLine}`}
          alt={'stats-line'}
          loading="lazy"
        />
        <AppTypography
          sx={{ textAlign: 'left' }}
          fontSize={'1.87rem'}
          variant="body1"
          font="Roblox2Squared"
          fontWeight={900}
          color="secondary"
        >
          {xp}
        </AppTypography>
      </StatsRowContainer>
      <StatsRowContainer>
        <AppTypography
          sx={{ textAlign: 'right' }}
          fontSize={'1.87rem'}
          variant="body1"
          font="Roblox2Squared"
          fontWeight={900}
          color="secondary"
        >
          {'УР'}
        </AppTypography>
        <img
          style={{
            height: '10px',
            objectFit: 'cover',
            width: '156px',
          }}
          src={`${statsLine}`}
          alt={'stats-line'}
          loading="lazy"
        />
        <AppTypography
          sx={{ textAlign: 'left' }}
          fontSize={'1.87rem'}
          variant="body1"
          font="Roblox2Squared"
          fontWeight={900}
          color="secondary"
        >
          {level}
        </AppTypography>
      </StatsRowContainer>
    </AchievementsStatsContainer>
  );
};
