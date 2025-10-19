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

export const SettingsContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'transparent',
  paddingInline: '46px',
  gap: '19px'
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

export const SettingsButton = styled('button')(() => ({
  marginTop: '72px',
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  border: 'unset',
  backgroundColor: '#563C5C',
  borderRadius: '11px',
  paddingInline: '23px',
  paddingBlock: '10px',
  filter: 'brightness(1.3)',
  justifyContent: 'center',

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

export const SocialButton = styled('button')(() => ({
  display: 'flex',
  flexDirection: 'row',
  border: 'unset',
  backgroundColor: '#563C5C',
  borderRadius: '11px',
  paddingInline: '24px',
  paddingBlock: '7px',
  justifyContent: 'center',

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

export const SettingsContainerButton = styled('button')(() => ({
  border: '1px solid white',
  backgroundColor: 'transparent',
  borderRadius: '11px',
  display: 'flex',
  flexDirection: 'row',
  borderColor: 'white',
  height: '81px',
  width: '300px',
  padding: 0,
  justifyContent: 'center',
  alignItems: 'center',

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