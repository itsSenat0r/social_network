import { type FC } from 'react';
import Box from '@mui/material/Box';
import AppTypography from '../../UI/AppTypography/AppTypography';

type ErrorPageProps = {
  props?: never;
};

export const ErrorPage: FC<ErrorPageProps> = () => {
  return (
    <Box sx={{ display: 'flex', position: 'fixed', inset: '0', justifyContent: 'center', alignItems: 'center' }}>
      <AppTypography font="Roblox2Squared" fontSize={'1rem'} variant="h4" color="primary">
        Страница не найдена..
      </AppTypography>
    </Box>
  );
};
