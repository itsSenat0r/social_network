
import { styled } from '@mui/material'

export const BackButtonWrapper = styled('button')(() => ({
  border: 'unset',
  backgroundColor: 'transparent',
  position: 'absolute',
  left: '18px',
  top: '25px',
  padding: '0',

  // Hover (необязательно)
  '&:hover': {
    filter: 'brightness(1.1)', // чуть ярче
  },

  // Active — когда пользователь нажимает
  '&:active': {
    filter: 'brightness(0.8)',  // фон темнее
  },
}))