import { useState, type FC } from 'react';
import { NavigationBarContainer } from './NavigationBarContainer';
import AppTypography from '../../UI/AppTypography/AppTypography';
import { BarButton } from '../../UI/BarButton/BarButton';
import { PageData, usePageContext } from '../../Contexts/PageContextProvider';
import { useNavigate } from 'react-router-dom';

type NavigationBarProps = {
  props?: never;
};

export const NavigationBar: FC<NavigationBarProps> = () => {
  const { pages, currentPage, setCurrentPage } = usePageContext();
  const router = useNavigate();

  const go_to = (page: PageData) => {
    setCurrentPage(page);
    console.log(pages[0].route);
    router(`/${page.route}`);
  };

  return (
    <NavigationBarContainer>
      {pages.map((page, index) => (
        <BarButton
          key={`bottom-button-${index}`}
          id={page.id}
          onClick={() => go_to(page)}
          isSelected={currentPage.id === page.id}
        >
          <AppTypography color="primary" font="Roblox2Squared" fontSize={'1rem'} fontWeight={900}>
            {page.name}
          </AppTypography>
        </BarButton>
      ))}
    </NavigationBarContainer>
  );
};
