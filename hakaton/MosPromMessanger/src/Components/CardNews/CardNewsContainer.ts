import ListItem from '@mui/material/ListItem'
import { Box, styled } from '@mui/material'

export const CardNewsContainer = styled(ListItem)(() => ({
  padding: 0,
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center'
}))

export const CardNewsHeader = styled(Box)(() => ({
  borderTopRightRadius: '16px',
  borderTopLeftRadius: '16px',
  backgroundColor: 'black',
  paddingInline: 10,
  paddingBlock: 2,
  flexDirection: 'row',
  display: 'flex',
  width: '100%',
}))

export const CardNewsAuthorContainer = styled('button')(() => ({
  border: 'unset',
  backgroundColor: 'white',
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  padding: '8px',

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