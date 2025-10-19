import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

import type { AppFontTypes } from './AppTypography';

export const StyledAppTypography = styled(Typography, {
  shouldForwardProp: prop => prop !== 'font',
})<AppFontTypes>(({ font }) => ({
  ...(font !== undefined && {
    fontFamily: font,
  }),
}));
