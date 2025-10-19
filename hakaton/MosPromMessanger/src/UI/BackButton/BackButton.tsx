import { type FC } from 'react';
import { BackButtonWrapper } from './BackButtonWrapper';
import backButton from '../../assets/images/backButton.png';

type BackButtonProps = {
  onClick: () => void;
};

export const BackButton: FC<BackButtonProps> = ({ onClick }) => {
  return (
    <BackButtonWrapper onClick={() => onClick()}>
      <img
        style={{
          display: 'flex',
          height: '42px',
          objectFit: 'cover',
          width: '42px',
        }}
        src={`${backButton}`}
        alt={'go-back'}
        loading="lazy"
      />
    </BackButtonWrapper>
  );
};
