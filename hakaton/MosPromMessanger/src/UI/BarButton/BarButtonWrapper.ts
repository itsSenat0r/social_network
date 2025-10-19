import { styled } from '@mui/material'

export const BarButtonWrapper = styled('button', {
  shouldForwardProp: prop => prop !== 'isSelected' && prop !== 'idButton'
})<{ isSelected: boolean, idButton: string }>(({ isSelected, idButton }) => ({
  height: '49px',
  border: 'unset',
  backgroundColor: '#563C5C',
  borderTopLeftRadius: '11px',
  borderTopRightRadius: '11px',

  ...(isSelected && {
    height: '58px',

  }),

  ...(idButton === 'lenta' && {
    paddingInline: '32px'
  }),

  ...(idButton === 'achivies' && {
    paddingInline: '32px'
  }),

  ...(idButton === 'profile' && {
    paddingInline: '18px'
  }),

  // Hover (необязательно)
  '&:hover': {
    filter: 'brightness(1.1)', // чуть ярче
  },

  // Active — когда пользователь нажимает
  '&:active': {
    filter: 'brightness(0.8)',  // фон темнее
  },
}))