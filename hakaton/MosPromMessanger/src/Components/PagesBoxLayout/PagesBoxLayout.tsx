import { type FC } from 'react';
import { PagesBoxLayoutWrapper } from './PagesBoxLayoutWrapper';

type PagesBoxLayoutProps = {
  children: React.ReactNode;
};

export const PagesBoxLayout: FC<PagesBoxLayoutProps> = ({ children }) => {
  return <PagesBoxLayoutWrapper>{children}</PagesBoxLayoutWrapper>;
};
