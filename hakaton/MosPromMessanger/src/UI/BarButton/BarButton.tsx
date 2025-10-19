import { CSSProperties, useState, type FC } from 'react';
import { BarButtonWrapper } from './BarButtonWrapper';

type BarButtonProps = {
  onClick: () => void;
  isSelected?: boolean;
  children?: React.ReactNode;
  id: string;
};

export const BarButton: FC<BarButtonProps> = ({ onClick, id, children, isSelected = false }) => {
  return (
    <BarButtonWrapper idButton={id} isSelected={isSelected} onClick={() => onClick()}>
      {children}
    </BarButtonWrapper>
  );
};
