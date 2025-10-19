import { type FC, type ReactNode } from 'react';

import { StyledAppTypography } from './StyledAppTypography.ts';

import type { TypographyProps } from '@mui/material/Typography';

export type AppFontTypes = {
  font?: 'Roblox2Squared' | 'Robloxian2' | 'Robloxian' | 'RobotoLocal';
};

export type AppTypographyProps = {
  className?: string;
  variant?: TypographyProps['variant'];
  fontSize?: React.CSSProperties['fontSize'];
  fontWeight?: React.CSSProperties['fontWeight'];
  lineHeight?: React.CSSProperties['lineHeight'];
  textAlign?: React.CSSProperties['textAlign'];
  children?: ReactNode;
  color?: TypographyProps['color'];
  sx?: TypographyProps['sx'];
  isEllipsis?: boolean;
  maxWidth?: React.CSSProperties['maxWidth'];
} & AppFontTypes;

const AppTypography: FC<AppTypographyProps> = ({
  children,
  className,
  sx,
  font = 'RobotoLocal',
  fontWeight = 'normal',
  fontSize = '1rem',
  isEllipsis = false,
  maxWidth = '70%',
  ...rest
}) => {
  return (
    <StyledAppTypography
      className={className}
      sx={{
        ...sx,
        ...(isEllipsis === true && {
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          maxWidth: maxWidth,
        }),
      }}
      font={font}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </StyledAppTypography>
  );
};

export default AppTypography;
