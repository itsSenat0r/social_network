import Box from '@mui/material/Box'
import { styled } from '@mui/material'

export const NavigationBarContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  position: 'fixed',
  width: '100%',
  bottom: 0,
  gap: '12px',
  paddingInline: '8px',
  justifyContent: 'center',
  alignItems: 'flex-end',
}))