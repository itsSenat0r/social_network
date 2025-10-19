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

export const CardNewsAuthorContainer = styled(Box)(() => ({
  backgroundColor: 'white',
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  padding: '8px'
}))