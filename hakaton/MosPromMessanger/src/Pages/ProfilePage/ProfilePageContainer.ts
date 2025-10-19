import Box from '@mui/material/Box'
import { styled } from '@mui/material'

export const ProfilePageContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
}))



export const ProfileDescriptionContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #E6E6FA',
  borderRadius: '11px',
  backgroundColor: 'transparent',
  paddingInline: '12px',
  paddingTop: '17px',
  paddingBottom: '24px',
  marginInline: '45px'
}))

export const ProfileButton = styled('button')(() => ({
  border: 'unset',
  backgroundColor: '#563C5C',
  borderRadius: '11px',
  paddingInline: '19px',
  paddingBlock: '6px',

  // Hover (необязательно)
  '&:hover': {
    filter: 'brightness(1.1)', // чуть ярче
  },

  // Active — когда пользователь нажимает
  '&:active': {
    transform: 'scale(0.97)',   // кнопка слегка уменьшается
    filter: 'brightness(0.8)',  // фон темнее
  },
}))