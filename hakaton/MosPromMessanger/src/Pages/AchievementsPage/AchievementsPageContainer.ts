import Box from '@mui/material/Box'
import { styled } from '@mui/material'
import achievementsButtonBackImg from '../../assets/images/achievementsButtonBackImage.png';

export const AchievementsPageContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
}))

export const AchievementsButtonsContainer = styled(Box)(() => ({
  paddingTop: '88px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '27px'
}))

export const AchievementsButton = styled('button')(() => ({
  border: 'unset',
  backgroundImage: `url(${achievementsButtonBackImg})`,
  backgroundSize: 'cover',
  backgroundColor: '#39283dff',
  borderRadius: '11px',
  paddingInline: '75px',
  paddingBlock: '38px',

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

export const MedalsMainContainer = styled(Box)(() => ({
  paddingTop: '43px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  paddingInline: '27px',
}))

export const MedalsContainer = styled(Box)(() => ({
  borderRadius: '11px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  paddingBlock: '27px',
  paddingInline: '20px',
  backgroundColor: '#39283dff',
}))

export const MedalsListContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  paddingTop: '37px',
  gap: '24px'
}))

export const MedalsListItemWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  paddingBlock: '14px',
  paddingLeft: '19px',
  borderRadius: '11px',
  border: '1px solid white'
}))

